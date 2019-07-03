import { NgModule, NO_ERRORS_SCHEMA, TRANSLATIONS, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  declarations: [
  ],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
