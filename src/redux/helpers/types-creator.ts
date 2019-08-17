class TypesCreator {
  private namespace: string;

  constructor(namespace: string) {
    this.namespace = namespace.toUpperCase();
  }

  get(action: string) {
    return {
      REQUEST: this.request(action),
      FAILURE: this.failure(action),
      SUCCESS: this.success(action),
      CANCEL: this.cancel(action),
    };
  }

  private request(action: string) {
    return `[${this.namespace}] ${action}`;
  }

  private failure(action: string) {
    return `${this.request(action)} failure`;
  }

  private cancel(action: string) {
    return `${this.request(action)} cancel`;
  }

  private success(action: string) {
    return `${this.request(action)} success`;
  }
}

export default TypesCreator;
