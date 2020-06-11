import {Component, OnInit} from '@angular/core';
import {PageLogService} from '../../core/services/page-log.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.less']
})
export class WorldComponent implements OnInit {
  private startTime: number;
  private preUrl: string;
  private curUrl: string;

  constructor(
    private pageLogService: PageLogService
  ) {
  }

  ngOnInit() {
  }

  activeFunc() {
    // this.startTime = Date.now();
    // sessionStorage.setItem('startTime', this.startTime.toString());
    // this.preUrl = sessionStorage.getItem('url');
    // this.curUrl = document.URL.length > 180 ? (document.URL.substr(0, 150) + '...') : document.URL;
    // this.pageLogService.sendPageLog(this.startTime, this.startTime, this.preUrl, this.curUrl);
    // sessionStorage.setItem('url', this.curUrl);
  }

  deactiveFunc() {
    // this.pageLogService.sendPageLog(this.startTime, Date.now(), this.preUrl, this.curUrl);
  }
}
