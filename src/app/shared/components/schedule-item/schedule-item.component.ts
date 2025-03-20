import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@Component({
  selector: 'app-schedule-item',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
  ],
  templateUrl: './schedule-item.component.html',
  styleUrl: './schedule-item.component.scss'
})
export class ScheduleItemComponent {
  @Input() scheduleItem!: FormGroup;
  @Input() songs: any[] = [];
  @Input() singers: string[] = [];
  @Input() numberSong!: number;
  @Input() scheduleData: any;
  @Output() deleteItemEvent = new EventEmitter<number>()

  deleteItem(index: number) {
    this.deleteItemEvent.emit(index);
  }
}
