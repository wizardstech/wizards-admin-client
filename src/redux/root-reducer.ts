import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import auth from './auth/reducer';
import user from './user/reducer';

export default (history: History) =>
  combineReducers({ auth, user, router: connectRouter(history) });
