import { Component, OnInit, forwardRef, OnDestroy, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ngx-context-area',
  templateUrl: './ngx-context-area.component.html',
  styleUrls: ['./ngx-context-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxContextAreaComponent),
      multi: true
    }
  ]
})
export class NgxContextAreaComponent implements OnInit, OnDestroy, ControlValueAccessor {

  areaValue: any;
  propagateChange = (_: any) => { };

  @Input() rows = 6;
  @Input() contextMenu: any[] = ['Pham Thi Huong', 'Vuong Xuan Nu', 'Lam Duc Dat', 'Bui Huu Dai'];

  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    this.areaValue = obj;
    this.propagateChange(this.areaValue);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }

  ngOnDestroy(): void {

  }

}
