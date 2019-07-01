import { ExtractState } from '../store/app.states';
import { EXTRACT_LIST } from '../constants/extract';

export const initialState: ExtractState = {
  extractModel: null
};

export function ExtractReducer(state = initialState, action: any): any {
  switch (action.type) {
    case EXTRACT_LIST: {
      return { ...state, extractModel: action.payload };
    }
    default: {
      return state;
    }
  }
}
