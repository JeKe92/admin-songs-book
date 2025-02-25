import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-add-song',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss'],
})
export class AddSongComponent {
  songForm: FormGroup;
  keys: string[];
  compasses: string[];
  singers: any[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.songForm = this.fb.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
      key: ['', Validators.required],
      tempo: [null, [Validators.required, Validators.min(10), Validators.max(300)]],
      mainVoice: ['', Validators.required],
      chordsUrl: ['', Validators.required],
      lyricsUrl: ['', Validators.required],
      videoUrl: ['', Validators.required],
      compass: ['', Validators.required],
    });

    this.keys = this.getKeys();
    this.compasses = this.getCompasses();
    this.getSingers();
  }

  private getKeys() {
    return [
      'C','Cm','C#','C#m','D','Dm','D#','D#m','E','Em','F','Fm',
      'F#','F#m','G','Gm','G#','G#m','A','Am','A#','A#m','B','Bm',
    ];
  }

  private getCompasses() {
    return ['2/4','3/4','4/4','6/8',]
  }

  private getSingers() {
    this.apiService.getSingers().subscribe((data: any) => {
      next: { this.singers = data?.map((singer: any) => singer.name).sort() };
      error: (e: any) => console.log(e);
    });
  }

  onSubmit(evt: Event) {
    if (this.songForm.valid) {
      this.apiService.addSong(this.songForm.value).subscribe({
        next: (response) => {
          console.log('Canción agregada:', response);
          alert('Canción agregada exitosamente');
          this.songForm.reset(); // Limpia el formulario después de agregar
        },
        error: (err) => {
          console.error('Error al agregar la canción:', err);
          alert('Error al agregar la canción');
        },
      });
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }
}
