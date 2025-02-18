import { Component, OnInit } from '@angular/core';
import { SongCardComponent } from "../../shared/components/song-card/song-card.component";
import { ISongCard } from '../../shared/components/song-card/song-card.interface';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-songs-book',
  standalone: true,
  imports: [
    SongCardComponent,
    CommonModule,
  ],
  templateUrl: './songs-book.component.html',
  styleUrl: './songs-book.component.scss'
})
export class SongsBookComponent implements OnInit {
  songs: ISongCard[] = [];

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    this.apiService.getSongs().subscribe((data: any) => {
      next: {this.songs = data};
      error: (e: any) => console.log(e);
    });
  }
}
