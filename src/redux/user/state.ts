import User from 'src/common/interfaces/user';

export interface UserState {
  user: User | null;
}

export const initialState: UserState = {
  user: null,
};
