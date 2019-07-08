import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActionsSubject, Store, Action } from '@ngrx/store';
import * as moment from 'moment';
import { Observable, Subject } from 'rxjs';
import { filter, map, startWith, takeUntil } from 'rxjs/operators';
import { State } from '../view.state';
import { ActionTrackingActionTypes, Create, Delete, FetchAll, Update } from './action-tracking.action';
import { ActionTracking } from './action-tracking.model';

@Component({
  selector: 'app-action-tracking',
  templateUrl: './action-tracking.component.html',
  styleUrls: ['./action-tracking.component.css']
})
export class ActionTrackingComponent implements OnInit, OnDestroy {

  loading$: Observable<boolean>;
  actionTrackings: ActionTracking[];
  isEdit$: Observable<{ value: boolean }>;
  actionTrackingForm: FormGroup;
  subscription: Subject<void> = new Subject();
  trackAction = [
    ActionTrackingActionTypes.FetchAllSuccess,
    ActionTrackingActionTypes.CreateSuccess,
    ActionTrackingActionTypes.UpdateSuccess,
    ActionTrackingActionTypes.DeleteSuccess,
    ActionTrackingActionTypes.CreateFaild,
    ActionTrackingActionTypes.UpdateFaild,
    ActionTrackingActionTypes.DeleteFaild
  ];
  trackings: Action[] = [];

  @ViewChild('actionTrackingFormRef') actionTrackingFormRef: FormGroupDirective;
  @ViewChild('elRefForm') elRefForm: ElementRef;
  constructor(
    private fb: FormBuilder,
    private actionsSubject$: ActionsSubject,
    private store: Store<State>,
  ) {
    // initial create / edit from
    this.actionTrackingForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastModified: [undefined]
    });

    // subscrible and switch status of form
    this.isEdit$ = this.actionTrackingForm.get('id').valueChanges.pipe(
      startWith(''),
      map(id => ({ value: (id || '').length > 0 }))
    );

    // track for save action status
    this.actionsSubject$.pipe(
      takeUntil(this.subscription), // only hold on subscrible when subscription alive
      filter((action) => this.trackAction.some(a => a === action.type))
    ).subscribe((action) => {
      this.trackings.push(action);
      switch (action.type) {
        case ActionTrackingActionTypes.FetchAllSuccess:
          if (isDefinedProp(action, 'payload')) { // case success action have data in payload
            // do something
            this.actionTrackings = action['payload'].data;
          }
          break;
        case ActionTrackingActionTypes.CreateSuccess:
        case ActionTrackingActionTypes.UpdateSuccess:
        case ActionTrackingActionTypes.DeleteSuccess:
          if (isDefinedProp(action, 'payload')) { // case success action have data in payload
            // do something
          }
          this.actionTrackingFormRef.resetForm();
          this.actionTrackingForm.reset();
          // reload data from list screen
          this.store.dispatch(new FetchAll());
          break;
        case ActionTrackingActionTypes.CreateFaild:
        case ActionTrackingActionTypes.UpdateFaild:
        case ActionTrackingActionTypes.DeleteFaild:
          if (isDefinedProp(action, 'payload')) { // case success action have data in payload
            // handle rise error return by service
            if (isDefined(action['payload'].error) && action['payload'].error instanceof HttpErrorResponse) {
              // get error header from error response
              const error = (<HttpErrorResponse>action['payload'].error).error;
              if (isDefined(error)) {
                // determine focus errors control occurs
                const focusError = firstOrDefault(error, null);
                if (isDefinedProp(focusError, 'message')) {
                  switch (focusError['message']) {
                    case 'NotNull': // handle errors with type not null
                      if (isDefined(this.actionTrackingForm) && isDefined(this.actionTrackingForm.controls) && isDefined(this.actionTrackingForm.controls[focusError.field])) {
                        // set error to update status of error FormControl
                        this.actionTrackingForm.controls[focusError.field].setErrors({ required: true });
                        // set focus to error FormControl
                        setTimeout(() => (<HTMLElement>this.elRefForm.nativeElement.querySelector(`[id=${focusError.field}]`)).focus(), 0)
                      }
                      break;
                    case 'NotDuplicate': // handle errors with type not unique
                      if (isDefined(this.actionTrackingForm) && isDefined(this.actionTrackingForm.controls) && isDefined(this.actionTrackingForm.controls[focusError.field])) {
                        this.actionTrackingForm.controls[focusError.field].setErrors({ notUnique: true });
                        setTimeout(() => (<HTMLElement>this.elRefForm.nativeElement.querySelector(`[id=${focusError.field}]`)).focus(), 0)
                      }
                      break;
                  }
                }
              }
            }
          }
          break;
      }
    });

  }

  ngOnInit() {
    this.store.dispatch(new FetchAll());
  }

  /**
   * tracking status of item in loop
   * @param index index of current loop
   * @param item item of current loop
   * @author daibh
   * @readonly please safe read code before edit this method
   */
  trackById(index: number, item: { id?: string }): string {
    return item.id;
  }

  /**
   * handle event when clicked on edit button
   * @param item data of item was selected
   * @author daibh
   * @readonly please safe read code before edit this method
   */
  editItem(item: ActionTracking) {
    this.actionTrackingForm.patchValue({ ...item, lastModified: moment() });
  }

  /**
   * process form submit to save new or update customer
   * @author daibh
   * @readonly please safe read code before edit this method
   */
  save = () => {
    if (this.actionTrackingForm.valid) {
      const data = this.actionTrackingForm.getRawValue();
      if (data.id && data.id.length) {
        this.store.dispatch(new Update({ item: { ...data, lastModified: moment() } }));
      } else {
        this.store.dispatch(new Create({ item: { ...data, lastModified: moment() } }));
      }
    }
  }

  /**
   * handle event when clicked on delete button
   * @param item data of item was selected
   * @author daibh
   * @readonly please safe read code before edit this method
   */
  delete(item: ActionTracking) {
    this.store.dispatch(new Delete({ id: item.id }));
  }

  /**
   * handle when component destroying
   * @author daibh
   * @readonly please safe read code before edit this method
   */
  ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
  }

}

/**
 * check a object is defined or not
 * @param obj object that need checking status
 */
export const isDefined = obj => obj !== undefined && obj !== null;

/**
 * check a field of object is defined or not
 * @param obj object that need checking status of special field
 * @param field field that need checking status
 */
export const isDefinedProp = (obj: Object, field: string) => isDefined(obj) && obj.hasOwnProperty(field);

/**
 * take first element of list value
 * @param arg list arguments that take first element
 * @param defaultValue default value if list argument is empty or undefined
 */
export function firstOrDefault<T>(arg: T[], defaultValue: T): T {
  if (isDefined(arg) && arg.length) {
    return Object.assign([], arg).pop();
  }
  return defaultValue;
}