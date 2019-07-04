import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor() { }

  fetch(from: 'Cancel' | 'Not cancel'): Observable<any> {
    return of({
      from,
      now: moment()
    });
  }
}

export class Broadcaster {
  from: 'Cancel' | 'Not cancel';
  now: moment.Moment
}
