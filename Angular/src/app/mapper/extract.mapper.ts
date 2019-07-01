import { Injectable } from '@angular/core';
import { ExtractModel } from '../models/extract/extract.model';

@Injectable()
export class ExtractMapper {
  public modelToViewModel(view: any): ExtractModel {
    try {

      if (!view) { return null; }

      const model = new ExtractModel(
        view.dateLaunch,
        view.description,
        view.number,
        view.location,
        view.dateConfirmation,
        view.bankName,
        view.bankAgency,
        view.bankAccount,
        view.bankDetailsComplete,
        view.finalValue,
        view.finalValueLocal,
      );

      return model;
    } catch (error) {
      throw new Error(`ExtractMapper - ModelToViewModel = ${error}`);
    }
  }

  public modelsToViewsModel = (views: any): ExtractModel[] => {
    try {

      if (!views) { return null; }

      const models: ExtractModel[] = [];

      views.forEach(async (view: any) => {
        const model = this.modelToViewModel(view);

        models.push(model);
      });

      return models;
    } catch (error) {
      throw new Error(`ExtractMapper - ModelsToViewsModel = ${error}`);
    }
  }
}
