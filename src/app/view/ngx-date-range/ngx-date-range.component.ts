import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDate, NgbDateParserFormatter, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter, NgbDateCustomParserFormatter } from '../../shared/datepicker.util';

@Component({
  selector: 'ngx-date-range',
  templateUrl: './ngx-date-range.component.html',
  styleUrls: ['./ngx-date-range.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxDateRangeComponent),
      multi: true
    },
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
    NgbDateMomentAdapter
  ]
})
export class NgxDateRangeComponent implements OnInit {

  dateValue: any;
  fromDate: any;
  toDate: any;
  hoveredDate: any;
  propagateChange = (_: any) => { };

  @ViewChild('ddPanel') ddPanel: NgbDropdown;
  constructor(
    private momentAdapter: NgbDateMomentAdapter

  ) {
    // this.fromDate = calendar.getToday();
    // this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    this.dateValue = obj;
    if (this.dateValue && this.dateValue.fromDate) {
      this.fromDate = this.momentAdapter.fromModel(this.dateValue.fromDate);
    }
    if (this.dateValue && this.dateValue.toDate) {
      this.toDate = this.momentAdapter.fromModel(this.dateValue.toDate);
    }
    this.propagateChange(this.dateValue);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    // do nothing
  }


  setDisabledState(isDisabled: boolean): void {
    // do nothing
  }

  onChange() {
    this.dateValue = {
      fromDate: this.momentAdapter.toModel(this.fromDate),
      toDate: this.momentAdapter.toModel(this.toDate)
    };
    this.writeValue(this.dateValue);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.ddPanel.toggle();
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.onChange();
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

}
