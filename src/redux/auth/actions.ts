import Credentials from 'src/common/interfaces/credentials';
import Login from 'src/common/interfaces/login';
import AsyncActionCreator from '../helpers/async-action-creator';

const asyncActionCreator = new AsyncActionCreator('auth');

export const loginAsync = asyncActionCreator.get<
  Credentials,
  Login,
  Error,
  string
>('login');
