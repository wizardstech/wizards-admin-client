import {
  applyMiddleware,
  createStore,
  Store,
  compose,
  Middleware,
} from 'redux';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from 'redux-observable';

import IStore from 'src/common/interfaces/store';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import { RootAction } from 'src/types';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware<RootAction>();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (initialState?: IStore): Store<IStore> => {
  const middlewares = [routerMiddleware(history), logger, epicMiddleware];

  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  epicMiddleware.run(rootEpic as any);
  return store;
};
