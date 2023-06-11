import { CONTACT_FILTER } from './types';

const initialState = {
  id: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_FILTER:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};
