import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ViewRoutingModule } from './view-routing.module';
import { ViewEffects } from './view.effects';
import { FEATURE_NAME, reducers } from './view.state';
import { ViewComponent } from './view.component';
import { HomeComponent } from './home/home.component';
import { NgxHelloComponent } from '../hello/hello.component';

@NgModule({
  imports: [
    SharedModule,
    ViewRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([
      ViewEffects
    ])
  ],
  declarations: [ViewComponent, HomeComponent, NgxHelloComponent]
})
export class ViewModule { }