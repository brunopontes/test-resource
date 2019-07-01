import { Injectable } from '@angular/core';
import { BaseRepository } from './base.repository';
import { environment } from './../../environments/environment';

@Injectable()
export class ExtractRepository extends BaseRepository {

  public getDataExtract(): Promise<any> {

    const url = environment.endPoint + environment.extract.url;

    return this._http.get(url).toPromise();
  }
}
