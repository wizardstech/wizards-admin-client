import { ajax, AjaxRequest, AjaxError } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { StateObservable } from 'redux-observable';

import HttpMethods from '../../common/enums/http-methods';
import Response from '../../common/interfaces/response';
import Store from 'src/common/interfaces/store';
import { catchError } from 'rxjs/operators';

interface ReduxServiceConfig extends AjaxRequest {
  baseURL?: string;
}

class ReduxService {
  public constructor(
    private store: StateObservable<Store>,
    private config: ReduxServiceConfig = {}
  ) {}

  protected request<T>(config: AjaxRequest) {
    const { token } = this.store.value.auth;
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    return (ajax({
      ...this.config,
      ...config,
      url: `${this.config.baseURL || ''}${config.url}`,
      headers,
    }) as unknown) as Observable<Response<T>>;
  }

  protected get<Res>(url: string, config?: AjaxRequest) {
    return this.request<Res>({ ...config, method: HttpMethods.GET, url });
  }

  protected post<Req, Res>(url: string, body?: Req, config?: AjaxRequest) {
    return this.request<Res>({
      ...config,
      method: HttpMethods.POST,
      url,
      body,
    });
  }

  protected delete<Res>(url: string, config?: AjaxRequest) {
    return this.request<Res>({ ...config, method: HttpMethods.DELETE, url });
  }

  protected patch<Req, Res>(url: string, body?: Req, config?: AjaxRequest) {
    return this.request<Res>({
      ...config,
      method: HttpMethods.PATCH,
      url,
      body,
    });
  }

  protected put<Req, Res>(url: string, body?: Req, config?: AjaxRequest) {
    return this.request<Res>({ ...config, method: HttpMethods.PUT, url, body });
  }
}

export default ReduxService;
