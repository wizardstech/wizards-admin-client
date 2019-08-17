import AsyncActionCreator from '../helpers/async-action-creator';
import User from 'src/common/interfaces/user';
import { AjaxError } from 'rxjs/ajax';

const asyncActionCreator = new AsyncActionCreator('user');

export const fetchMe = asyncActionCreator.get<void, User, AjaxError, string>(
  'fetch me'
);
