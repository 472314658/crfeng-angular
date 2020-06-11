import {Directive, ElementRef, HostListener} from '@angular/core';
import {UserInfoService} from '../../core/services/user-info';
import {DatePipe} from '@angular/common';
import {DataService} from '../../core/services/data.service';

@Directive({selector: '[appSpy]'})

export class SpyDirective {

  constructor(
    private dataService: DataService,
    private userInfoService: UserInfoService,
    private datePipe: DatePipe,
    private el: ElementRef
  ) {
  }

  @HostListener('click') clickFunction() {
    const currenTime = Date.now();
    const dataBody = {
      logType: 'evt',
      appId: sessionStorage.getItem('appId'),
      pagUrl: (document.URL.length > 180 ? (document.URL.substr(0, 180) + '...') : document.URL),
      btnNam: this.el.nativeElement.innerText,
      evtTim: this.datePipe.transform(currenTime, 'yyyy-MM-dd-HH.mm.ss.') + currenTime.toString().substr(10) + '000'
    };
    this.dataService.sendLogMsg(dataBody).subscribe(() => {
    }, (error) => {
      console.warn(JSON.stringify(error));
    });
  }
}
