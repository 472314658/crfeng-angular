import {Component, OnInit} from '@angular/core';
import {UserInfoService} from '../../../core/services/user-info';
import {NzMessageService, NzNotificationService} from 'ng-zorro-antd';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../core/services/data.service';
import {JwtDecodeService} from '../../../core/services/jwt-decode.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.less']
})
export class EntranceComponent implements OnInit {

  constructor(
    private userInfoService: UserInfoService,
    private notification: NzNotificationService,
    private router: Router,
    private dataService: DataService,
    private message: NzMessageService,
    private activatedRoute: ActivatedRoute,
    private jwtDecodeService: JwtDecodeService,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const token = params.get('token');
      const appId = params.get('appId');
      if (token === null || token === '') {
        this.notification.warning('登录异常', '缺少认证信息');
      }
      sessionStorage.clear();
      sessionStorage.setItem('url', (document.URL.length > 180 ? (document.URL.substr(0, 150) + '...') : document.URL));
      sessionStorage.setItem('appId', appId);
      this.userInfoService.removeItem('usrSap');
      this.userInfoService.removeItem('token');
      if (token) {
        this.userInfoService.setToken(token);
        const tokenInfo = JSON.parse(atob(token));
        this.userInfoService.setItem('usrSap', tokenInfo.usrSap);
      }
      this.loginLog();
    });
  }

  loginLog() {
    this.router.navigate(['welcome']);
  }
}
