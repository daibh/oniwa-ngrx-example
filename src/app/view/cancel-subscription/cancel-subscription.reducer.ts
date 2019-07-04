import { CancelSubscriptionAction, CancelSubscriptionActionTypes } from "./cancel-subscription.action";
import { Broadcaster } from "./subscription.service";

export interface CancelSubscriptionState {
    broadcast?: Broadcaster
};

const initialState: CancelSubscriptionState = {

};

export function cancelSubscriptionReducer(state = initialState, action: CancelSubscriptionAction): CancelSubscriptionState {
    switch (action.type) {
        case CancelSubscriptionActionTypes.Verb1: {
            return {
                ...state,
                broadcast: action.payload
            };
        }

        case CancelSubscriptionActionTypes.Verb2: {
            return {
                ...state,
                broadcast: action.payload
            };
        }

        default: {
            return state;
        }
    }
}