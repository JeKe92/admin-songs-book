import { Component, OnInit } from '@angular/core';
import { SongCardComponent } from "../../shared/components/song-card/song-card.component";
import { ISongCard } from '../../shared/components/song-card/song-card.interface';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../shared/services/api.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-songs-book',
    imports: [
        SongCardComponent,
        CommonModule,
        FormsModule,
        RouterModule,
    ],
    templateUrl: './songs-book.component.html',
    styleUrl: './songs-book.component.scss'
})
export class SongsBookComponent implements OnInit {
  songs: ISongCard[] = [];
  songsData: ISongCard[] = [];
  termSearch: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    this.apiService.getSongs().subscribe((data: any) => {
      next: {
        this.songsData = data;
        this.songs = data;
      };
      error: (e: any) => console.log(e);
    });
  }

  onKeyUp() {
    if (!this.termSearch) {
      this.songs = structuredClone(this.songsData);

      return;
    }

    const term = this.termSearch.toLowerCase();

    this.songs = this.songsData.filter(song => 
      song.artist.toLowerCase().indexOf(term) !== -1
      || song.title.toLowerCase().indexOf(term) !== -1
      || song.key?.toLowerCase()?.indexOf(term) !== -1
      || song.compass?.toLowerCase()?.indexOf(term) !== -1
      || song.mainVoice?.toLowerCase()?.indexOf(term) !== -1
    )
  }
}
