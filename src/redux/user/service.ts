import ReduxService from '../helpers/redux-service';
import User from 'src/common/interfaces/user';

class UserService extends ReduxService {
  public fetchMe() {
    return this.get<User>('/users/me');
  }
}

export default UserService;
