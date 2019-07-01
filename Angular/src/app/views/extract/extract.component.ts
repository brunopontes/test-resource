import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store';
import { ExtractActions } from '../../actions/extract.actions';
import { Observable } from 'rxjs';
import { ExtractModel } from '../../models/extract/extract.model';

@Component({
  templateUrl: 'extract.component.html'
})
export class ExtractComponent {
  public extract: Observable<ExtractModel[]>;

  constructor(private _extractActions: ExtractActions, private _store: Store<IAppState>) {
    this._extractActions.getDataExtract();
    this.extract = this._store.select(state => state.extractState.extractModel);
  }
}
