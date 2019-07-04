import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectBroadcast } from './cancel-subsription.selector';
import { Verb1, Verb2 } from './cancel-subscription.action';
import * as moment from 'moment';

@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.component.html',
  styleUrls: ['./cancel-subscription.component.css']
})
export class CancelSubscriptionComponent implements OnInit {

  subscription: Subject<any>;
  firstStoreValue: any[] = [];
  secondStoreValue: any[] = [];
  thirdStoreValue: any[] = [];

  constructor(
    private store: Store<any>
  ) {
    this.subscription = new Subject();
    this.store.pipe(takeUntil(this.subscription)).pipe(select(selectBroadcast)).subscribe(res => {
      if (res) {
        this.firstStoreValue.push(res);
      }
    });

    this.store.pipe(select(selectBroadcast)).subscribe(res => {
      if (res) {
        this.secondStoreValue.push(res);
      }
    });
  }

  ngOnInit() {
  }

  doCancelSubscription = () => {
    this.subscription.next();
    this.subscription.complete();
  }

  doShowFromAction = () => {
    this.store.pipe(select(selectBroadcast)).subscribe(res => {
      if (res) {
        this.thirdStoreValue.push(res);
      }
    });
  }

  doDispatchData = () => {
    this.store.dispatch(new Verb1({ from: 'Cancel', now: moment() }));
  }

}
