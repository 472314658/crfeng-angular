import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorldComponent} from './world.component';
import {HomeComponent} from './home/home.component';
import {BlankComponent} from './blank/blank.component';

const routes: Routes = [
  {
    path: 'world', component: WorldComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'blank'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'blank',
        component: BlankComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldRoutingModule {
}
