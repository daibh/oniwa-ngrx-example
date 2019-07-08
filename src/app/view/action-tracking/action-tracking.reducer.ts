import { ActionTrackingActions, ActionTrackingActionTypes } from "./action-tracking.action";
import { ActionTracking } from "./action-tracking.model";
import { HttpErrorResponse } from "@angular/common/http";

/**
 * Interface bind model state for action tracking
 */
export interface ActionTrackingState {
    actionTrackings?: ActionTracking[],
    error?: HttpErrorResponse
};

/**
 * initial state for action tracking
 * @author daibh
 * @readonly do not change this action. please contact with author before implement code
 */
const initialState: ActionTrackingState = {

};

/**
 * process browsing action was be dispatching
 * @param state current state
 * @param action current action browsing
 * @author daibh
 * @readonly do not change this action. please contact with author before implement code 
 */
export function actionTrackingeducer(state = initialState, action: ActionTrackingActions): ActionTrackingState {
    // seperate action type to reducer special action
    switch (action.type) {
        case ActionTrackingActionTypes.FetchAll: {
            return {
                ...state,
                error: undefined
            };
        }
        case ActionTrackingActionTypes.FetchAllSuccess: {
            return {
                ...state,
                actionTrackings: action.payload.data
            };
        }
        case ActionTrackingActionTypes.FetchAllFaild: {
            return {
                ...state,
                error: action.payload.error
            };
        }
        case ActionTrackingActionTypes.Create: {
            return {
                ...state,
                error: undefined
            };
        }
        case ActionTrackingActionTypes.CreateSuccess: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.CreateFaild: {
            return {
                ...state,
                error: action.payload.error
            };
        }
        case ActionTrackingActionTypes.Update: {
            return {
                ...state,
                error: undefined
            };
        }
        case ActionTrackingActionTypes.UpdateSuccess: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.UpdateFaild: {
            return {
                ...state,
                error: action.payload.error
            };
        }
        case ActionTrackingActionTypes.Delete: {
            return {
                ...state,
                error: undefined
            };
        }
        case ActionTrackingActionTypes.DeleteSuccess: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.DeleteFaild: {
            return {
                ...state,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
}