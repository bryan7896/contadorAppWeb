import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { ActionTypes, actions } from './global.action';
import { environment } from '../../environments/environment';


export interface State {
}

export const reducers: ActionReducerMap<State> = {
};

export interface GlobalState {
  setContador: number;
}

export const inicialStateGlobal: GlobalState = {
  setContador: 0
};

export function globalReducer(state: GlobalState = inicialStateGlobal, action: actions): GlobalState {
  return state;
}

export function globalMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state: State, action: any) {
    switch (action.type) {
      case ActionTypes.setContador:
        return {
          ...state,
          setContador: action.payload.setContador
        };
      default:
        return reducer(state, action);
    }

  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
