import { CommonModule, DatePipe } from '@angular/common';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ApiService } from '../../shared/services/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScheduleItemComponent } from '../../shared/components/schedule-item/schedule-item.component';
import { ISong } from '../../shared/interfaces/song.interface';
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-add-schedule-form',
  imports: [
    CommonModule,
    DatePipe,
    ReactiveFormsModule,
    ScheduleItemComponent,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es',
    }
  ],
  templateUrl: './add-schedule-form.component.html',
  styleUrl: './add-schedule-form.component.scss'
})
export class AddScheduleFormComponent implements OnInit {
  scheduleDate: string = '';
  schedules: any[] = [];
  singers: any[] = [];
  songData: ISong[] = [];
  songs: string[] =[];
  scheduleItem!: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder,
  ) {
    
  }

  ngOnInit() {
    this.initForms();
    this.route.queryParams.subscribe({
      next: (queryParams: Params) => {
        this.scheduleDate = queryParams['date'];
        this.getSingers();
        this.getSongs();
        this.getScheduleByDate(this.scheduleDate);
      },
      error: () => this.router.navigate(['schedule']),
    });
  }

  private initForms() {
    this.scheduleItem = this.fb.group({
          song: ['', Validators.required],
          mainVoice: ['', Validators.required],
          description: [''],
        })
  }

  private getSingers() {
    this.apiService.getSingers().subscribe((data: any) => {
      next: { this.singers = data?.map((singer: any) => singer.name).sort() };
      error: (e: any) => console.log(e);
    });
  }

  private getSongs() {
    this.apiService.getSongs().subscribe((data: any) => {
      next: {
        this.songData = data;
        this.songs = data?.map((song: any) => song.title + ' - ' + song.key).sort();
      };
      error: (e: any) => console.log(e);
    });
  }

  private getScheduleByDate(date: string) {
    this.apiService.getScheduleByDate(date).subscribe({
      next: (schedule: any[]) => {
        this.schedules = schedule;
        console.log(this.schedules);
      }
    });
  }

  addNewSong() {
    this.schedules.push({
        song: '',
        mainVoice: '',
        description: '',
    })
  }

  deleteSong(index: number) {
    this.schedules.splice(index - 1, 1);
  }
}
