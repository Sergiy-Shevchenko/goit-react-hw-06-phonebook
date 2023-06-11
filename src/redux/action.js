import { nanoid } from 'nanoid';
import { CONTACT_ADD, CONTACT_DELETE, CONTACT_FILTER } from './types';

export const addContact = (name, number) => {
  return {
    type: CONTACT_ADD,
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: CONTACT_DELETE,
    payload: id,
  };
};

export const filterContacts = value => {
  return {
    type: CONTACT_FILTER,
    payload: value,
  };
};
