import Role from './role';

export default interface User {
  id: string;
  fistname: string;
  lastname: string;
  username: string;
  email: string;
  roles: Role[];
}
