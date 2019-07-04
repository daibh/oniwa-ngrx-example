import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxHelloComponent } from '../hello/hello.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicContentComponent, DynamicSample1Component, DynamicSample2Component, UnknownDynamicComponent } from './dynamic/dynamic-content.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { HomeComponent } from './home/home.component';
import { RuntimeContentComponent } from './runtime/runtime-content.component';
import { RuntimeComponent } from './runtime/runtime.component';
import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { ViewEffects } from './view.effects';
import { FEATURE_NAME, reducers } from './view.state';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ParentComponent } from './behavior-subject/parent/parent.component';
import { ChildComponent } from './behavior-subject/child/child.component';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ViewRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([
      ViewEffects
    ])
  ],
  declarations: [
    ViewComponent,
    HomeComponent,
    NgxHelloComponent,
    // dynamic component declaration
    DynamicComponent,
    UnknownDynamicComponent,
    DynamicSample1Component, 
    DynamicSample2Component,    
    DynamicContentComponent,
    // runtime component declaration
    RuntimeComponent,
    RuntimeContentComponent,
    BehaviorSubjectComponent,
    ParentComponent,
    ChildComponent,
    CancelSubscriptionComponent
  ],
  entryComponents: [
      DynamicSample1Component, 
      DynamicSample2Component, 
      UnknownDynamicComponent
  ],
  exports: []
})
export class ViewModule { }