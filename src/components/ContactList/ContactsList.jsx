import React from 'react';
import css from './ContactList.module.css';
import ContactsItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  return (
    <div className={css.section}>
      <ul className={css.contacList}>
        {contacts.map(({id, name, number}) => (
          <ContactsItem id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
