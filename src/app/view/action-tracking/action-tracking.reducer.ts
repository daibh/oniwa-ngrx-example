import { ActionTrackingActions, ActionTrackingActionTypes } from "./action-tracking.action";
import { ActionTracking } from "./action-tracking.model";

export interface ActionTrackingState {
    actionTrackings?: ActionTracking[]
};

const initialState: ActionTrackingState = {

};

export function actionTrackingeducer(state = initialState, action: ActionTrackingActions): ActionTrackingState {
    switch (action.type) {
        case ActionTrackingActionTypes.FetchAll: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.FetchAllSuccess: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.FetchAllFaild: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.Create: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.CreateSuccess: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.CreateFaild: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.Update: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.UpdateSuccess: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.UpdateFaild: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.Delete: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.DeleteSuccess: {
            return {
                ...state
            };
        }
        case ActionTrackingActionTypes.DeleteFaild: {
            return {
                ...state
            };
        }
        default: {
            return state;
        }
    }
}