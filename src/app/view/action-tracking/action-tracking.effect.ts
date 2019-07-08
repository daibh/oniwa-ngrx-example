import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTrackingActionTypes, FetchAllSuccess, FetchAllFaild, Create, CreateSuccess, CreateFaild, FetchAll, Update, UpdateSuccess, UpdateFaild, Delete, DeleteSuccess, DeleteFaild } from './action-tracking.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ActionTrackingService } from './action-tracking.service';

@Injectable()
export class ActionTrackingEffects {
    constructor(
        private actions$: Actions,
        private service$: ActionTrackingService
    ) { }

    /**
    * Effect of dispatch action FetchAll.
    * Dependence include actions: FetchAllSuccess, FetchAllFaild.
    * FetchAllSuccess was be dispatched when fetchAll service occurs successfully
    * FetchAllFaild was be catched when fetchAll service occurs failed
    * @author daibh
    * @readonly do not change this action. please contact with author before implement code
    */
    @Effect() fetchAll$ = this.actions$.pipe(
        ofType(ActionTrackingActionTypes.FetchAll),
        switchMap(
            (action: FetchAll) => this.service$.fetchAll().pipe(
                map(data => new FetchAllSuccess({ data })),
                catchError(error => of(new FetchAllFaild({ error })))
            )
        )
    );

    /**
    * Effect of dispatch action Create.
    * Dependence include actions: CreateSuccess, CreateFaild.
    * CreateSuccess was be dispatched when add service occurs successfully
    * CreateFaild was be catched when add service occurs failed
    * @author daibh
    * @readonly do not change this action. please contact with author before implement code
    */
    @Effect() create$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTrackingActionTypes.Create),
        switchMap(
            (action: Create) => this.service$.add(action.payload.item).pipe(
                map(data => new CreateSuccess({ data })),
                catchError(error => of(new CreateFaild({ error })))
            )
        )
    );

    /**
    * Effect of dispatch action Update.
    * Dependence include actions: UpdateSuccess, UpdateFaild.
    * UpdateSuccess was be dispatched when update service occurs successfully
    * UpdateFaild was be catched when update service occurs failed
    * @author daibh
    * @readonly do not change this action. please contact with author before implement code
    */
    @Effect() update$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTrackingActionTypes.Update),
        switchMap(
            (action: Update) => this.service$.update(action.payload.item).pipe(
                map(data => new UpdateSuccess({ data })),
                catchError(error => of(new UpdateFaild({ error })))
            )
        )
    );

    /**
    * Effect of dispatch action Delete.
    * Dependence include actions: DeleteSuccess, DeleteFaild.
    * DeleteSuccess was be dispatched when delete service occurs successfully
    * DeleteFaild was be catched when delete service occurs failed
    * @author daibh
    * @readonly do not change this action. please contact with author before implement code
    */
    @Effect() delete$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTrackingActionTypes.Delete),
        switchMap(
            (action: Delete) => this.service$.delete(action.payload.id).pipe(
                map(data => new DeleteSuccess({ data })),
                catchError(error => of(new DeleteFaild({ error })))
            )
        )
    );
}