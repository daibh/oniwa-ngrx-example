import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../core/core.state';
import { cancelSubscriptionReducer } from './cancel-subscription/cancel-subscription.reducer';

export const FEATURE_NAME = 'view';

export const selectView = createFeatureSelector<State, ViewState>(
  FEATURE_NAME
);

export const reducers: ActionReducerMap<ViewState> = {
  cancelSubscription: cancelSubscriptionReducer
};

export interface ViewState {
  cancelSubscription
}

export interface State extends AppState {
  view: ViewState;
}
