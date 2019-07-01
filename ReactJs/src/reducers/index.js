import { combineReducers } from 'redux';
import ExtractReducer from './extractReducer';

export const reducers = asyncReducers => combineReducers({
  extractState: ExtractReducer,
  ...asyncReducers,
});
