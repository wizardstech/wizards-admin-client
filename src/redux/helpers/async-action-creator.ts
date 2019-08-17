import { createAsyncAction } from 'typesafe-actions';

import TypesCreator from './types-creator';

class AsyncActionCreator {
  private typesCreator: TypesCreator;

  constructor(namespace: string) {
    this.typesCreator = new TypesCreator(namespace);
  }

  get<Request, Success, Failure, Cancel>(action: string) {
    const types = this.typesCreator.get(action);
    return createAsyncAction(
      types.REQUEST,
      types.SUCCESS,
      types.FAILURE,
      types.CANCEL
    )<Request, Success, Failure, Cancel>();
  }
}

export default AsyncActionCreator;
