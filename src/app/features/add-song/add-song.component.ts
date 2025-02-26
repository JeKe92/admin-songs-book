import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../shared/services/api.service';
import { UtilsService } from '../../shared/services/utils.service';

@Component({
  selector: 'app-add-song',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss'],
})
export class AddSongComponent {
  songForm!: FormGroup;
  keys: string[];
  compasses: string[];
  singers: any[] = [];
  buttonsEnabled: boolean = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private utilsService: UtilsService,
  ) {
    this.initForm();
    this.keys = this.utilsService.getKeys();
    this.compasses = this.utilsService.getCompasses();
    this.getSingers();
    this.buttonsEnabled = true;
  }

  private initForm() {
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
  }

  private getSingers() {
    this.apiService.getSingers().subscribe((data: any) => {
      next: { this.singers = data?.map((singer: any) => singer.name).sort() };
      error: (e: any) => console.log(e);
    });
  }

  protected onSubmit() {
    if (this.songForm.valid) {
      this.buttonsEnabled = false;
      this.songForm.patchValue({
        videoUrl: this.utilsService.getYoutubeEmbedUrl(this.songForm.controls['videoUrl'].value),
      });
      this.apiService.addSong(this.songForm.value).subscribe({
        next: (response) => {
          alert('Canción agregada exitosamente');
          this.songForm.reset();
          this.buttonsEnabled = true;
        },
        error: (err) => {
          alert('Error al agregar la canción' + err);
          this.buttonsEnabled = true;
        },
      });
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }

}

