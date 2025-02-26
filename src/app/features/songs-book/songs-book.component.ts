import { Component, OnInit } from '@angular/core';
import { SongCardComponent } from "../../shared/components/song-card/song-card.component";
import { ISongCard } from '../../shared/components/song-card/song-card.interface';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../shared/services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-songs-book',
    imports: [
        SongCardComponent,
        CommonModule,
        FormsModule,
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

    this.songs = this.songsData.filter(song => 
      song.artist.indexOf(this.termSearch) !== -1
      || song.title.indexOf(this.termSearch) !== -1
      || song.key?.indexOf(this.termSearch) !== -1
      || song.compass?.indexOf(this.termSearch) !== -1
      || song.mainVoice?.indexOf(this.termSearch) !== -1
    )
  }
}
