import { EHttpMethod } from '../models/common/enum/e-http-method.enum';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseRepository {
  constructor(
    protected _http: HttpClient,
  ) {
  }

  private async request(
    method: EHttpMethod,
    url: string,
    content: any = null
  ): Promise<any> {

    let fn: any = this._http.post;
    switch (method) {
      case EHttpMethod.Delete:
        fn = (url, content, options) => this._http.delete(url, options);
        break;
      case EHttpMethod.Get:
        fn = (url, content, options) => this._http.get(url, options);
        break;
      case EHttpMethod.Head:
        fn = (url, content, options) => this._http.head(url, options);
        break;
      case EHttpMethod.Options:
        fn = (url, content, options) => this._http.options(url, options);
        break;
      case EHttpMethod.Patch:
        fn = (url, content, options) => this._http.patch(url, content, options);
        break;
      case EHttpMethod.Post:
        fn = (url, content, options) => this._http.post(url, content, options);
        break;
      case EHttpMethod.Put:
        fn = (url, content, options) => this._http.put(url, content, options);
        break;
    }

    try {
      const _url = url;

      const result = await fn(_url, content)
        .map((value: any) => {
          return {
            data: value.data,
            errors: value == null || value.errors == null ? [] : value.errors
          };
        })
        .catch(this.handleError)
        .toPromise();

      if (
        result == null ||
        (result.errors != null && result.errors.length > 0)
      ) {
      }
      return result;
    } catch (e) {

      if (e.errors.length > 0) {
        if (e.errors[0].Property === '401') {
          return null;
        } else return e;
      }
    }
  }

  public get(url): Promise<any> {
    return this.request(EHttpMethod.Get, url);
  }
  public delete(url): Promise<any> {
    return this.request(EHttpMethod.Delete, url);
  }
  public post(url, content): Promise<any> {
    return this.request(EHttpMethod.Post, url, content);
  }
  public put(url, content): Promise<any> {
    return this.request(EHttpMethod.Put, url, content);
  }
  public patch(url, content): Promise<any> {
    return this.request(EHttpMethod.Patch, url, content);
  }

  public handleError = (errorData: any) => {
    return errorData;
  };

  public getFormUrlEncoded(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
}
