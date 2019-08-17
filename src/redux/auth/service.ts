import ReduxService from '../helpers/redux-service';
import Credentials from 'src/common/interfaces/credentials';
import Login from 'src/common/interfaces/login';

class AuthService extends ReduxService {
  public login(credentials: Credentials) {
    return this.post<Credentials, Login>('/auth/login', credentials);
  }
}

export default AuthService;
