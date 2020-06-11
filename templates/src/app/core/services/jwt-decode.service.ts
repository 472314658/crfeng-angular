import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class JwtDecodeService {
  constructor(
    private jwtHelperService: JwtHelperService
  ) {
  }

  public getJsonData(jwtPara: string) {
    const result = this.jwtHelperService.decodeToken(jwtPara);
    const strRlt = JSON.stringify(result);
    return JSON.parse(strRlt);
  }
}
