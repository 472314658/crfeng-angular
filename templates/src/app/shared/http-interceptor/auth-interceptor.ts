import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UserInfoService} from '../../core/services/user-info';
import {Observable} from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  public authReq: any;

  constructor(private userInfoService: UserInfoService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = this.userInfoService.getToken();
    if (req.headers.get('qryTyp') === 'uploadExcel') {
      this.authReq = req.clone({
        headers: req.headers
          .set('Authorization', 'Bearer' + authToken)
      });
    } else {
      this.authReq = req.clone({
        headers: req.headers
          .set('Authorization', 'Bearer' + authToken)
          .set('Content-Type', 'application/json')
      });
    }
    return next.handle(this.authReq);
  }
}
