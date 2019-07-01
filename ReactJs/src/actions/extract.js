import axios from 'axios';
import Config from '../config/environments';
import { handleError } from '.';
import { POST_EXTRACT, LIST_EXTRACT } from '../actionTypes/extract';
import { modelsToViewsModel } from '../mapper/extract';

export const getDataExtract = () => async (dispatch) => {
  const base = {
    type: LIST_EXTRACT,
    payload: {},
  };

  base.state = true;

  const url = Config.END_POINT + Config.EXTRACT.URL;

  axios.get(url).then((response) => {
    base.payload = handleError(response);
    base.payload.data = modelsToViewsModel(base.payload.data);
  }).catch((error) => {
    base.payload = handleError(error);
  }).finally(() => {
    dispatch(base);
  });

  dispatch(base);
};

export const postDataExtract = data => async (dispatch) => {
  const base = {
    type: POST_EXTRACT,
    payload: {},
  };

  base.state = true;

  const url = Config.END_POINT + Config.EXTRACT.URL;

  axios.post(url, data).then((response) => {
    base.payload = handleError(response);
  }).catch((error) => {
    base.payload = handleError(error);
  }).finally(() => {
    dispatch(base);
  });

  dispatch(base);
};
