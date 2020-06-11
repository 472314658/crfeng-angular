import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ErrorPageComponent} from './shared/component/error-page/error-page.component';
import {LockPageComponent} from './shared/component/lock-page/lock-page.component';
import {NotfoundPageComponent} from './shared/component/notfound-page/notfound-page.component';
import {OutoftimePageComponent} from './shared/component/outoftime-page/outoftime-page.component';
import {EntranceComponent} from './shared/component/entrance/entrance.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'entrance'},
  {
    path: 'entrance',
    component: EntranceComponent
  },
  {path: 'world', loadChildren: () => import('./pages/world/world.module').then(m => m.WorldModule)},
  {
    path: 'error-page',
    component: ErrorPageComponent
  },
  {
    path: 'lock-page',
    component: LockPageComponent
  },
  {
    path: 'notfound-page',
    component: NotfoundPageComponent
  },
  {
    path: 'outoftime-page',
    component: OutoftimePageComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'lock-page'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
