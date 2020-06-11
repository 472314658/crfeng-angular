import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {UserInfoService} from './user-info';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {DataService} from './data.service';

@Injectable({providedIn: 'root'})

export class PageLogService {

  constructor(
    private dataService: DataService,
    private datePipe: DatePipe,
    private userInfoService: UserInfoService
  ) {
  }

  public sendPageLog(startTime, endTime, preUrl, pagUrl) {
    const dataBody = {
      logType: 'page',
      appId: sessionStorage.getItem('appId'),
      preUrl,
      pagUrl,
      strTim: this.datePipe.transform(startTime, 'yyyy-MM-dd-HH.mm.ss.') + startTime.toString().substr(10) + '000',
      endTim: this.datePipe.transform(endTime, 'yyyy-MM-dd-HH.mm.ss.') + endTime.toString().substr(10) + '000',
      pagTim: endTime - startTime
    };
    this.dataService.sendLogMsg(dataBody).subscribe(() => {
    }, (error) => {
      console.warn(JSON.stringify(error));
    });
  }
}
