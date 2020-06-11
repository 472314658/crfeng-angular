import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {
  NZ_ICONS,
  NzBadgeModule,
  NzCalendarModule, NzDatePickerModule, NzDescriptionsModule, NzDividerModule, NzDrawerModule,
  NzLayoutModule, NzListModule,
  NzMenuModule,
  NzTypographyModule
} from 'ng-zorro-antd';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {SpyDirective} from './directives/spy.directive';
import {LayoutComponent} from './component/layout/layout.component';
import {LayoutMenuComponent} from './component/layout-menu/layout-menu.component';
import {MenuComponent} from './component/menu/menu.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {ErrorPageComponent} from './component/error-page/error-page.component';
import {LockPageComponent} from './component/lock-page/lock-page.component';
import {EntranceComponent} from './component/entrance/entrance.component';
import {NotfoundPageComponent} from './component/notfound-page/notfound-page.component';
import {OutoftimePageComponent} from './component/outoftime-page/outoftime-page.component';
import {CommonModule} from '@angular/common';
import {IconDefinition} from '@ant-design/icons-angular';


// import {AccountBookTwoTone, BankTwoTone, BankOutline} from '@ant-design/icons-angular/icons';
//
// const icons: IconDefinition[] = [AccountBookTwoTone, BankTwoTone, BankOutline];

import * as AllIcons from '@ant-design/icons-angular/icons';
import {scrollDirective} from "./directives/scroll.directive";
import {NoticeComponent} from "./component/notice/notice.component";
import {ScheduleComponent} from "./component/schedule/schedule.component";
import {FormsModule} from "@angular/forms";

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutMenuComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    SpyDirective,
    ErrorPageComponent,
    LockPageComponent,
    EntranceComponent,
    NotfoundPageComponent,
    OutoftimePageComponent,
    scrollDirective,
    NoticeComponent,
    ScheduleComponent
  ],
  imports: [
    RouterModule,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
    CommonModule,
    NzIconModule.forRoot(icons),
    NzTypographyModule,
    NzBadgeModule,
    NzCalendarModule,
    NzListModule,
    FormsModule,
    NzDatePickerModule,
    NzDrawerModule,
    NzDescriptionsModule,
    NzDividerModule
  ],
  exports: [
    LayoutComponent,
    LayoutMenuComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    SpyDirective,
    ErrorPageComponent,
    LockPageComponent,
    EntranceComponent,
    NotfoundPageComponent,
    OutoftimePageComponent,
    ScheduleComponent,
    NoticeComponent
  ],
  // providers: [{provide: NZ_ICONS, useValue: icons}],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentModule {

}
