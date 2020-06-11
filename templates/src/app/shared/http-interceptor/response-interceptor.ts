import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {UserInfoService} from '../../core/services/user-info';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(
    private userInfoService: UserInfoService,
    private router: Router,
    private notification: NzNotificationService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: any) => {
          if (event instanceof HttpResponse) {
            this.handleData(event);
          }
        },
        (err: any) => {
          this.handleData(err);
        }
      ));
  }

  private handleData(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
    switch (event.status) {
      case 200:
        if (event.headers.has('refresh-token') === true) {
          this.userInfoService.setToken(event.headers.get('refresh-token'));
        }
        break;
      case 401:
        this.router.navigate(['lock-page']);
        break;
      case 403:
        this.router.navigate(['lock-page']);
        break;
      case 404:
        this.router.navigate(['lock-page']);
        break;
      case 500:
        if ((event as any).error.errCode === undefined) {
          this.notification.error('请求服务异常', '远程服务器响应有误，请联系系统管理员!');
        } else {
          this.notification.error('请求服务异常', (event as any).error.errMsg);
        }
        break;
    }
    return of(event);
  }
}
