import { createReducer, ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { UserState, initialState } from './state';

export type UserAction = ActionType<typeof actions>;

const userReducer = createReducer<UserState, UserAction>(
  initialState
).handleAction(actions.fetchMe.success, (state, { payload }) => {
  return {
    ...state,
    user: payload,
  };
});

export default userReducer;
