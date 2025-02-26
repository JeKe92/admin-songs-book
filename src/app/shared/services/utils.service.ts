import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public getYoutubeEmbedUrl(url: string) {
    const videoId = this.getYoutubeVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${this.getYoutubeVideoId(url)}` : '';
  }

  public getYoutubeVideoId(url: string) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;  
    const match = url.match(regExp);  
    if (!match || match[7].length !== 11) {
      alert('No se pudo extraer el ID del video.');

      return false;
    }

    return match[7];
  }

  public getKeys() {
    return [
      'C','Cm','C#','C#m','D','Dm','D#','D#m','E','Em','F','Fm',
      'F#','F#m','G','Gm','G#','G#m','A','Am','A#','A#m','B','Bm',
    ];
  }

  public getCompasses() {
    return ['2/4','3/4','4/4','6/8',]
  }
}
