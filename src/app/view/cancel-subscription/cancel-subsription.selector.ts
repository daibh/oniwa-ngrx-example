import { createSelector } from "@ngrx/store";
import { ViewState, selectView } from "../view.state";
import { CancelSubscriptionState } from "./cancel-subscription.reducer";

export const selectCancelSubscription = createSelector(
    selectView,
    (state: ViewState) => state.cancelSubscription
);

export const selectBroadcast = createSelector(
    selectCancelSubscription,
    (state: CancelSubscriptionState) => state.broadcast
);