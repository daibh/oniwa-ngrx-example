import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../core/core.state';

export const FEATURE_NAME = 'view';
export const selectAdmin = createFeatureSelector<State, ViewState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ViewState> = {

};

export interface ViewState {

}

export interface State extends AppState {
  view: ViewState;
}
