import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AgGridAngular } from "ag-grid-angular";
import type { ColDef } from "ag-grid-community";

import { ApiService } from '../../shared/services/api.service';
import { ISongBookGridRow } from './songs-book-grid.interface';
import { ISongCard } from '../../shared/components/song-card/song-card.interface';

import { AllCommunityModule, ModuleRegistry, themeQuartz } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-songs-book-grid',
  imports: [
    AgGridAngular,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './songs-book-grid.component.html',
  styleUrl: './songs-book-grid.component.scss'
})
export class SongsBookGridComponent implements OnInit {
  songs: ISongCard[] = [];
  rows: ISongBookGridRow[] = [];
  cols: ColDef[] = [];
  defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    floatingFilter: true
  };
  pagination = true;
  theme = themeQuartz;

  constructor( private apiService: ApiService) {
  }

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    this.apiService.getSongs().subscribe((data: any) => {
      next: {
        this.songs = data;
        this.buildDataTable();
      };
      error: (e: any) => console.log(e);
    });
  }

  private buildDataTable() {
    this.cols = [
      {field: 'title', headerName: 'Título', flex: 2},
      {field: 'artist', headerName: 'Artista'},
      {field: 'key', headerName: 'Tono'},
    ];
    this.rows = this.songs.map(song => ({
      title: song.title,
      artist: song.artist,
      key: song.key,
    }) as ISongBookGridRow);


  }
}
