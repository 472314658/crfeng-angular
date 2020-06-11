import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {UserInfoService} from './user-info';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {SERVICEPATH} from '../constants/global.constants';

@Injectable({providedIn: 'root'})

export class DataService {

  constructor(
    private httpClient: HttpClient,
    private datePipe: DatePipe,
    private userInfoService: UserInfoService
  ) {
  }

  public sendLogMsg(dataBody) {
    const postData = JSON.stringify(dataBody);
    const url = environment.NGX_PATH + '/log';
    const header = new HttpHeaders()
      .set('flag', 'log');
    return this.httpClient.post(url, postData, {responseType: 'json', headers: header})
      .pipe(
        catchError((err) => {
          throw  new Error(err.message || err);
        })
      );
  }

  public queryFunction(firstPara, secondPara, flag): Observable<any> {
    let param: any;
    let url = '';
    switch (flag) {
      case 'RightList':
        break;
      case 'MenuList':
        param = new HttpParams()
          .set('appId', sessionStorage.getItem('appId'));
        url = environment.NGX_PATH + '/base/menuList';
        break;
    }
    return this.httpClient
      .get(url, {responseType: 'json', params: param})
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response) {
            return response;
          } else {
            throw new Error(flag + '接口调用失败');
          }
        }),
        catchError(err => {
          throw new Error(err.message || err);
        })
      );
  }

  public queryData(infbdyData: any, suffixUrl: string): Observable<any> {
    const postData = JSON.stringify(infbdyData);
    const url = environment.NGX_PATH + SERVICEPATH.SRV_PATH + suffixUrl;
    return this.httpClient
      .post(url, postData, {responseType: 'json'})
      .pipe(map((response: HttpResponse<any>) => {
          return response;
        }),
        catchError(err => {
          throw new Error(err.message || err);
        })
      );
  }

  public makeMenu(menuList) {
    let rootId: number;
    rootId = this.getSubMenu(-1, menuList)[0].menuId;
    let initList = this.getSubMenu(rootId, menuList);
    initList = this.pushMenu(initList, menuList);
    for (const i of initList) {
      i.subMenu = this.pushMenu(this.getSubMenu(i.menuId, menuList), menuList);
    }
    return initList;
  }

  getSubMenu(pidCod: number, menuList: any[]) {
    const sumMenuList = [];
    for (const i of menuList) {
      if (i.menuPId === pidCod) {
        sumMenuList.push({
          menuId: i.menuId,
          menuNam: i.menuNam,
          menuPId: i.menuPId,
          menuIcon: i.menuIcon,
          menuPrgNam: i.menuPrgNam,
          subMenu: [],
          menuDes: i.menuDes
        });
      }
    }
    return sumMenuList;
  }

  pushMenu(fatList: any[], menuList) {
    for (const i of fatList) {
      if (i.menuPrgNam === '#') {
        let codList: any[];
        codList = this.getSubMenu(i.menuId, menuList);
        i.subMenu.push(codList);
      }
    }
    return fatList;
  }
}
