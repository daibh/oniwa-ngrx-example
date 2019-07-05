import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTrackingActionTypes } from './action-tracking.action';

@Injectable()
export class ActionTrackingEffects {
    constructor(
        private actions$: Actions
    ) { }

    @Effect() fetchAll$: Observable<Action> = this.actions$.pipe(ofType(ActionTrackingActionTypes.FetchAll));

    @Effect() create$: Observable<Action> = this.actions$.pipe(ofType(ActionTrackingActionTypes.Create));

    @Effect() update$: Observable<Action> = this.actions$.pipe(ofType(ActionTrackingActionTypes.Update));

    @Effect() delete$: Observable<Action> = this.actions$.pipe(ofType(ActionTrackingActionTypes.Delete));
}