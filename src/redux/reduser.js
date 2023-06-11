import { combineReducers } from 'redux';
import { contactsReducer } from './contactsReduser';
import { filterReducer } from './filterReduser';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
