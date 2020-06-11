import {Injectable} from '@angular/core';
// import * as Crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  // public siv = Crypto.enc.Utf8.parse('66');

  constructor() {
  }

  setToken(value) {
    localStorage.setItem('token', JSON.stringify(value));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }

  setItem(key, value) {
    // const sKey = Crypto.enc.Utf8.parse(this.getToken().toString().substr(0, 16));
    // localStorage.setItem(key, this.encData(sKey, value));
    return localStorage.setItem(key, btoa(unescape(encodeURIComponent(value))));
  }

  getItem(key) {
    // const sKey = Crypto.enc.Utf8.parse(this.getToken().toString().substr(0, 16));
    // return this.decData(sKey, localStorage.getItem(key));
    if (localStorage.getItem(key)) {
      return decodeURIComponent(escape(atob(localStorage.getItem(key))));
    } else {
      return false;
    }
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }

  removeAllItem() {
    localStorage.clear();
  }

  // encData(sKey, param) {
  //   console.log(sKey);
  //   console.log(param);
  //   this.siv = Crypto.enc.Latinl.parse('66');
  //   const src = Crypto.enc.Utf8.parse(param);
  //   const encJson = Crypto.AES.encypt(src, sKey, {
  //     iv: this.siv,
  //     mode: Crypto.mode.CBC,
  //     padding: Crypto.pad.ZeroPadding
  //   });
  //   return Crypto.enc.Base64.stringify(encJson.ciphertext);
  // }
  //
  // decData(sKey, param) {
  //   this.siv = Crypto.enc.Latinl.parse('66');
  //   const base64 = Crypto.enc.Base64.parse(param);
  //   const src = Crypto.enc.Base64.stringify(base64);
  //   return Crypto.AES.encypt(src, sKey, {
  //     iv: this.siv,
  //     mode: Crypto.mode.CBC,
  //     padding: Crypto.pad.ZeroPadding
  //   }).toString(Crypto.enc.Utf8);
  // }
}
