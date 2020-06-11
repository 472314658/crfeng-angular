import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {zh_CN} from 'ng-zorro-antd/i18n';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ComponentModule} from './shared/component.module';
import {JwtModule} from '@auth0/angular-jwt';
import {httpInterceptorProviders} from './shared/http-interceptor/config';
import {NZ_CONFIG, NzConfig, NzNotificationService, NzMessageService} from 'ng-zorro-antd';
import {WorldModule} from './pages/world/world.module';

const ngZorroConfig: NzConfig = {
  // 注意组件名称没有 nz 前缀
  // icon: {nzTheme: 'twotone'}
};
registerLocaleData(zh);

export function tokenGetter() {
  return '';
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentModule,
    JwtModule.forRoot({
      config: {tokenGetter}
    }),
    WorldModule,
    AppRoutingModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: NZ_CONFIG, useValue: ngZorroConfig},
    NzNotificationService,
    NzMessageService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
