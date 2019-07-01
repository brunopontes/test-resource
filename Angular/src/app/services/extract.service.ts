import { ExtractRepository } from '../repositories/extract.repository';
import { Injectable } from '@angular/core';
import { ExtractModel } from '../models/extract/extract.model';
import { ExtractMapper } from '../mapper/extract.mapper';

@Injectable()
export class ExtractService {
  constructor(
    private _extractRepository: ExtractRepository,
    private _extractMapper: ExtractMapper
  ) { }

  public async getDataExtract(): Promise<ExtractModel[]> {

    const view = await this._extractRepository.getDataExtract();

    const model = this._extractMapper.modelsToViewsModel(view.data);

    return model;
  }
}
