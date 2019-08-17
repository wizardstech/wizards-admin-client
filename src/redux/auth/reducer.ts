import { createReducer, ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { AuthState, initialState } from './state';

export type AuthAction = ActionType<typeof actions>;

const authReducer = createReducer<AuthState, AuthAction>(
  initialState
).handleAction(actions.loginAsync.success, (state, { payload }) => {
  const token = payload.access_token;
  window.sessionStorage.setItem('token', token);
  return {
    ...state,
    token,
  };
});

export default authReducer;
