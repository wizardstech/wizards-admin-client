import { combineEpics } from 'redux-observable';

import authEpics from './auth/epics';
import userEpics from './user/epics';

export default combineEpics(authEpics, userEpics);
