import { NgModule, NO_ERRORS_SCHEMA, TRANSLATIONS, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuDirective } from './ngx-context-area/content-menu.directive';
import { NgxContextAreaComponent } from './ngx-context-area/ngx-context-area.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule,
  ],
  exports: [
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ContextMenuDirective,
    NgxContextAreaComponent
  ],
  declarations: [
    ContextMenuDirective,
    NgxContextAreaComponent
  ],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
