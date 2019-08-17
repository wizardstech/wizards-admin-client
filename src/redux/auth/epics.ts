import { map, filter, switchMap } from 'rxjs/operators';
import { combineEpics, Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';

import Store from 'src/common/interfaces/store';
import { loginAsync } from './actions';
import AuthService from './service';
import { AuthAction } from './reducer';

const loginEpic: Epic<AuthAction, AuthAction, Store> = (action$, store) => {
  const authService = new AuthService(store);
  return action$.pipe(
    filter(isActionOf(loginAsync.request)),
    switchMap(action =>
      authService
        .login(action.payload)
        .pipe(map(({ response }) => loginAsync.success(response)))
    )
  );
};

export default combineEpics(loginEpic);
