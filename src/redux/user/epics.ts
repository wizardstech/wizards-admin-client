import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { of, pipe } from 'rxjs';
import { combineEpics, Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';

import Store from 'src/common/interfaces/store';
import { fetchMe } from './actions';
import UserService from './service';
import { UserAction } from './reducer';

const fetchMeEpic: Epic<UserAction, UserAction, Store> = (action$, store) => {
  const userService = new UserService(store);
  return action$.pipe(
    filter(isActionOf(fetchMe.request)),
    switchMap(() =>
      userService.fetchMe().pipe(
        map(({ response }) => fetchMe.success(response)),
        catchError(err => of(fetchMe.failure(err)))
      )
    )
  );
};

export default combineEpics(fetchMeEpic);
