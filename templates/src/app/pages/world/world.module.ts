import {NgModule} from '@angular/core';
import {DatePipe} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NzLayoutModule} from 'ng-zorro-antd/layout';

import {HomeComponent} from './home/home.component';
import {BlankComponent} from './blank/blank.component';
import {ComponentModule} from '../../shared/component.module';

import {WorldComponent} from './world.component';
import {WorldRoutingModule} from './world-routing.module';

@NgModule({
  imports: [
    WorldRoutingModule,
    NzLayoutModule,
    ComponentModule,
    RouterModule
  ],
  declarations: [
    WorldComponent,
    HomeComponent,
    BlankComponent
  ],
  exports: [WorldComponent],
  entryComponents: [
    WorldComponent
  ],
  providers: [DatePipe],
})
export class WorldModule {
}
