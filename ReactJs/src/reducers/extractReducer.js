import { POST_EXTRACT, LIST_EXTRACT } from '../actionTypes/extract';

const BASE = {
  state: false,
  data: null,
};

const INITIAL_STATE = {
  statePostExtract: BASE,
  listExtract: BASE,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_EXTRACT:
      return { ...state, statePostExtract: action.payload };
    case LIST_EXTRACT:
      return { ...state, listExtract: action.payload };
    default:
      return state;
  }
};
