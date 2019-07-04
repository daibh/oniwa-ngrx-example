import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { RuntimeComponent } from './runtime/runtime.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';

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
      },
      {
        path: 'behavior-subject',
        component: BehaviorSubjectComponent,
        data: {
          title: 'Behavior subject'
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
