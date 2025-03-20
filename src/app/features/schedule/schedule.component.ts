import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/es';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ApiService } from '../../shared/services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-schedule',
  imports: [
    CommonModule,
    RouterModule,
    FullCalendarModule,
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2025-03-15' },
      { title: 'event 2', date: '2025-03-09' }
    ],
    locale: esLocale,
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    }
  };

  scheduleData: any[] = [];

  constructor (
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.getScheduleByDate();
    this.calendarOptions.events = [
      { title: 'event 1', date: '2025-03-15' },
      { title: 'event 2', date: '2025-03-09' },
      { title: this.scheduleData[0]?.song, date: this.scheduleData[0]?.date}
    ];
  }

  handleDateClick(arg: any) {
    this.router.navigate(['add'], {relativeTo: this.route, queryParams: {date: arg.dateStr}})
  }

  private getScheduleByDate() {
    this.apiService.getScheduleByDate('2025-03-12').subscribe({
      next: (schedule: any[]) => {
        this.scheduleData = schedule;
        console.log(schedule);
      }
    });
  }
}
