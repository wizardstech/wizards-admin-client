import { AuthState } from 'src/redux/auth/state';
import { UserState } from 'src/redux/user/state';

export default interface Store {
  auth: AuthState;
  user: UserState;
}
