import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store';
import { EXTRACT_LIST } from '../constants/extract';
import { ExtractService } from '../services/extract.service';

@Injectable()
export class ExtractActions {
  constructor(
    private _extractService: ExtractService,
    private _store: Store<IAppState>
  ) { }

  getDataExtract() {
    this._extractService.getDataExtract().then(response => {
      this._store.dispatch({
        type: EXTRACT_LIST,
        payload: response
      });
    });
  }
}
