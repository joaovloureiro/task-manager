import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutBasicComponent } from './layouts/layout-basic/layout-basic.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client/list',
    pathMatch: 'full'
  },
  {
    path: 'client',
    component: LayoutBasicComponent,
    loadChildren: () =>
      import('./layouts/layout-basic/layout-basic.module').then(
        (m) => m.LayoutBasicModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
