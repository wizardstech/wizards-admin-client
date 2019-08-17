import { ActionType } from 'typesafe-actions';
import { RouterAction, LocationChangeAction } from 'connected-react-router';

import * as auth from './redux/auth/actions';

type ReactRouterAction = RouterAction | LocationChangeAction;
type AuthAction = ActionType<typeof auth>;

export type RootAction = ReactRouterAction | AuthAction;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}

declare global {
  interface Window {
    // A hack for the Redux DevTools Chrome extension.
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <F extends Function>(f: F) => F;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __INITIAL_STATE__?: any;
  }
}
