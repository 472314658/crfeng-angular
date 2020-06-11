import {Injectable} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {UserInfoService} from '../../core/services/user-info';
import {AUTH} from '../../core/constants/global.constants';

@Injectable({
  providedIn: 'root'
})
export class AccessInGuard implements CanActivate {
  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
    private userInfoService: UserInfoService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    if (this.userInfoService.getItem('usrAccess') === AUTH.SBSRGT) {
      return true;
    } else {
      this.router.navigate(['lock-page']);
      return false;
    }
  }

}
