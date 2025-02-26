import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url/safe-url.pipe';
import { ISongCard } from './song-card.interface';

@Component({
    selector: 'app-song-card',
    imports: [
        SafeUrlPipe,
        CommonModule,
    ],
    templateUrl: './song-card.component.html',
    styleUrl: './song-card.component.scss'
})
export class SongCardComponent {
  @Input() songCard?: ISongCard;

  constructor(){
  }
}
