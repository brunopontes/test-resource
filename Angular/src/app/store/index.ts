import { combineReducers } from 'redux';
import { ExtractReducer } from '../reducers/extract.reducer';
import { ExtractState } from './app.states';

export interface IAppState {
  extractState: ExtractState;
}

export const rootReducer = combineReducers<IAppState>({
  extractState: ExtractReducer,
});
