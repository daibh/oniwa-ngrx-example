import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  static behaviorSubject$: BehaviorSubject<TalkContent> = new BehaviorSubject<TalkContent>(null);
  observable$: Observable<TalkContent>;
  observableSubscription$: any;

  constructor() {
    this.observable$ = new Observable(observable => this.observableSubscription$ = observable);
  }

  getObservable(): Observable<any> {
    return this.observable$;
  }

  getBehaviorSubject(): Observable<any> {
    return BehaviorService.behaviorSubject$;
  }

  doSay(talkContent: TalkContent) {
    BehaviorService.behaviorSubject$.next(talkContent);
    this.observableSubscription$.next(talkContent);
  }

}

export class TalkContent {
  obj: 'child' | 'parent';
  message: string;
}