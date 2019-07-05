import { Action } from '@ngrx/store';
import { ActionTracking } from './action-tracking.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ActionTrackingActionTypes {
    FetchAll = '[ActionTracking] FetchAll',
    FetchAllSuccess = '[ActionTracking] FetchAllSuccess',
    FetchAllFaild = '[ActionTracking] FetchAllFaild',
    Create = '[ActionTracking] Create',
    CreateSuccess = '[ActionTracking] CreateSuccess',
    CreateFaild = '[ActionTracking] CreateFaild',
    Update = '[ActionTracking] Update',
    UpdateSuccess = '[ActionTracking] UpdateSuccess',
    UpdateFaild = '[ActionTracking] UpdateFaild',
    Delete = '[ActionTracking] Delete',
    DeleteSuccess = '[ActionTracking] DeleteSuccess',
    DeleteFaild = '[ActionTracking] DeleteFaild'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class FetchAll implements Action {
    readonly type = ActionTrackingActionTypes.FetchAll;

    constructor() { }
}

export class FetchAllSuccess implements Action {
    readonly type = ActionTrackingActionTypes.FetchAllSuccess;

    constructor(public payload: ActionTracking[]) { }
}

export class FetchAllFaild implements Action {
    readonly type = ActionTrackingActionTypes.FetchAllFaild;

    constructor(public payload: ActionTracking[]) { }
}

export class Create implements Action {
    readonly type = ActionTrackingActionTypes.Create;

    constructor() { }
}

export class CreateSuccess implements Action {
    readonly type = ActionTrackingActionTypes.CreateSuccess;

    constructor(public payload: ActionTracking[]) { }
}

export class CreateFaild implements Action {
    readonly type = ActionTrackingActionTypes.CreateFaild;

    constructor(public payload: ActionTracking[]) { }
}

export class Update implements Action {
    readonly type = ActionTrackingActionTypes.Update;

    constructor() { }
}

export class UpdateSuccess implements Action {
    readonly type = ActionTrackingActionTypes.UpdateSuccess;

    constructor(public payload: ActionTracking[]) { }
}

export class UpdateFaild implements Action {
    readonly type = ActionTrackingActionTypes.UpdateFaild;

    constructor(public payload: ActionTracking[]) { }
}

export class Delete implements Action {
    readonly type = ActionTrackingActionTypes.Delete;

    constructor() { }
}

export class DeleteSuccess implements Action {
    readonly type = ActionTrackingActionTypes.DeleteSuccess;

    constructor(public payload: ActionTracking[]) { }
}

export class DeleteFaild implements Action {
    readonly type = ActionTrackingActionTypes.DeleteFaild;

    constructor(public payload: ActionTracking[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ActionTrackingActions
    = FetchAll
    | FetchAllSuccess
    | FetchAllFaild
    | Create
    | CreateSuccess
    | CreateFaild
    | Update
    | UpdateSuccess
    | UpdateFaild
    | Delete
    | DeleteSuccess
    | DeleteFaild;
