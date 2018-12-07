/*
 * ................................................................................................................................
 *  . Copyright (c)
 *  .
 *  . The routes.ts class was created by :
 *  . A.Bolot, O.Osgart, L.Oms and G.Peltier
 *  .
 *  . As part of the polygame project
 *  .
 *  . Last modified : 13/09/18 15:13
 *  .
 *  . Contact : idevedit@gmail.com
 *  ...............................................................................................................................
 *
 */

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TasksViewComponent} from './app/components/tasks-view/tasks-view.component';
import {SidebarComponent} from './app/components/sidebar/sidebar.component';

const appRoutes: Routes = [
  {path: '', component: SidebarComponent},
  {path: 'tasks', component: TasksViewComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {
}
