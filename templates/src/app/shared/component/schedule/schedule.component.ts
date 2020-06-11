import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less']
})
/**
 * 日程
 */
export class ScheduleComponent implements OnInit {

  data = [];
  topNum = 8;
  bottomNum = 18;
  date = new Date();

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 24; i++) {
      this.data[this.data.length] = i + ':00';
    }
  }

  showMore(type) {
    if (type === 0) {
      this.topNum = 0;
    } else if (type === 1) {
      this.bottomNum = 23;
    }
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
