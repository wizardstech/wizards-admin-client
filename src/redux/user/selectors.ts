import Store from 'src/common/interfaces/store';

export const selectUser = (state: Store) => state.user.user;
