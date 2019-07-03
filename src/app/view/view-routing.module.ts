import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    data: {
      title: 'Views',
      status: false
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Simple Login'
        }
      }
    ],
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
