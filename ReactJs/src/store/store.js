import {
  applyMiddleware,
  compose,
  createStore as createReduxStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import log from '../config/log/logger';
import { reducers } from '../reducers';

const createStore = (initialState = {}) => {
  const middleware = [thunk];
  const enhancers = [];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  log.info(process.env.NODE_ENV, 'environment');

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
  }

  const store = createReduxStore(
    reducers(),
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => { });
  }

  return store;
};

export default createStore;
