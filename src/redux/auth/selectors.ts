import Store from 'src/common/interfaces/store';

export const selectToken = (state: Store) => state.auth.token;
