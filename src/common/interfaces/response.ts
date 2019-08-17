import { AjaxResponse, AjaxRequest } from 'rxjs/ajax';

declare class Response<T> extends AjaxResponse {
  constructor(originalEvent: Event, xhr: XMLHttpRequest, request: AjaxRequest);
  response: T;
}

export default Response;
