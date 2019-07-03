import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { RuntimeComponent } from './runtime/runtime.component';

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
          title: 'Trang chủ'
        }
      },
      {
        path: 'dynamic-content',
        component: DynamicComponent,
        data: {
          title: 'Dynamic content loader'
        }
      },
      {
        path: 'runtime-content',
        component: RuntimeComponent,
        data: {
          title: 'Runtime content loader'
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
