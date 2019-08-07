import { NgModule, NO_ERRORS_SCHEMA, TRANSLATIONS, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuDirective } from './ngx-context-area/content-menu.directive';
import { NgxContextAreaComponent } from './ngx-context-area/ngx-context-area.component';
import { TextInputAutocompleteDirective } from './text-input-autocomplete/text-input-autocomplete.directive';
import { TextInputAutocompleteContainerComponent } from './text-input-autocomplete/text-input-autocomplete-container.component';
import { TextInputAutocompleteMenuComponent } from './text-input-autocomplete/text-input-autocomplete-menu.component';

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
    NgxContextAreaComponent,
    TextInputAutocompleteDirective,
    TextInputAutocompleteContainerComponent,
    TextInputAutocompleteMenuComponent
  ],
  declarations: [
    ContextMenuDirective,
    NgxContextAreaComponent,
    TextInputAutocompleteDirective,
    TextInputAutocompleteContainerComponent,
    TextInputAutocompleteMenuComponent
  ],
  entryComponents: [TextInputAutocompleteMenuComponent],
  providers: [
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
