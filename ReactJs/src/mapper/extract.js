import Model from '../models/model/extract';
import ViewModel from '../models/viewModel/extract';

export const viewModelToModel = (view) => {
  try {
    if (!view) return null;

    const model = Object.assign({}, Model);

    model.dateLaunch = view.DateLaunch;
    model.description = view.Description;
    model.number = view.Number;
    model.location = view.Location;
    model.dateConfirmation = view.DateConfirmation;
    model.bankName = view.BankName;
    model.bankAgency = view.BankAgency;
    model.bankAccount = view.BankAccount;
    model.bankDetailsComplete = view.BankDetailsComplete;
    model.finalValue = view.FinalValue;
    model.finalValueLocal = view.FinalValueLocal;

    return model;
  } catch (error) {
    throw new Error(`ExtractMapper - viewModelToModel = ${error}`);
  }
};

export const modelToViewModel = (model) => {
  try {
    if (!model) return null;

    const view = Object.assign({}, ViewModel);

    view.DateLaunch = model.dateLaunch;
    view.Description = model.description;
    view.Number = model.number;
    view.Location = model.location;
    view.DateConfirmation = model.dateConfirmation;
    view.BankName = model.bankName;
    view.BankAgency = model.bankAgency;
    view.BankAccount = model.bankAccount;
    view.BankDetailsComplete = model.bankDetailsComplete;
    view.FinalValue = model.finalValue;
    view.FinalValueLocal = model.finalValueLocal;

    return view;
  } catch (error) {
    throw new Error(`ExtractMapper - ModelToViewModel = ${error}`);
  }
};

export const modelsToViewsModel = (models) => {
  try {
    if (!models) return null;

    const views = [];

    models.forEach(async (model) => {
      const view = modelToViewModel(model);

      views.push(view);
    });

    return views;
  } catch (error) {
    throw new Error(`ExtractMapper - ModelsToViewsModel = ${error}`);
  }
};

export const viewModelToState = (view) => {
  try {
    if (!view) return null;

    const model = Object.assign({}, Model);

    model.DateLaunch = view.DateLaunch;
    model.Description = view.Description;
    model.Number = view.Number;
    model.Location = view.Location;
    model.DateConfirmation = view.DateConfirmation;
    model.BankName = view.BankName;
    model.BankAgency = view.BankAgency;
    model.BankAccount = view.BankAccount;
    model.BankDetailsComplete = view.BankDetailsComplete;
    model.FinalValue = view.FinalValue;
    model.FinalValueLocal = view.FinalValueLocal;

    return model;
  } catch (error) {
    throw new Error(`ExtractMapper - viewModelToState = ${error}`);
  }
};
