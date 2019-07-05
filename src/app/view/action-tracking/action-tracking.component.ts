import { Component, OnInit } from '@angular/core';
import { ActionTrackingService } from './action-tracking.service';
import { ActionTracking } from './action-tracking.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-action-tracking',
  templateUrl: './action-tracking.component.html',
  styleUrls: ['./action-tracking.component.css']
})
export class ActionTrackingComponent implements OnInit {

  loading$: Observable<boolean>;
  actionTrackings: ActionTracking[];
  isEdit$: Observable<{ value: boolean }>;
  actionTrackingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private actionTrackingService: ActionTrackingService
  ) {
    actionTrackingService.fetchAll().subscribe(res => this.actionTrackings = res);
    this.actionTrackingForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastModified: [undefined]
    });
    this.isEdit$ = this.actionTrackingForm.get('id').valueChanges.pipe(
      startWith(''),
      map(id => ({ value: (id || '').length > 0 }))
    );
  }

  ngOnInit() {
  }

  trackById(index: number, item: { id?: string }): string {
    return item.id;
  }

  editItem(item: ActionTracking) {
    this.actionTrackingForm.patchValue({ ...item, lastModified: moment() });
  }

  save = (actionTrackingFormRef: FormGroupDirective) => {
    if (this.actionTrackingForm.valid) {
      const data = this.actionTrackingForm.getRawValue();
      if (data.id && data.id.length) {
        this.update(data);
      } else {
        this.add({ ...data });
      }
      this.actionTrackingService.fetchAll().subscribe(res => {
        this.actionTrackings = res;
      });

      actionTrackingFormRef.resetForm();
      this.actionTrackingForm.reset();
    }
  }

  add(item: ActionTracking) {
    this.actionTrackingService.add({ ...item, lastModified: moment() });
  }

  delete(item: ActionTracking) {
    this.actionTrackingService.delete(item.id);
    this.actionTrackingService.fetchAll().subscribe(res => {
      this.actionTrackings = res;
    });
  }

  update(item: ActionTracking) {
    this.actionTrackingService.update({ ...item, lastModified: moment() });
  }

}
