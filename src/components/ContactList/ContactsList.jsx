import React from 'react';
import css from './ContactList.module.css';
import ContactsItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

const filterContacts = (contacts, filter) => {
  const nopmalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(nopmalizedFilter)
  );
};

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const filter = useSelector(state => state.filter.id);
  console.log(filter);
  const visibleContacts = filterContacts(contacts, filter);

  return (
    <div className={css.section}>
      <ul className={css.contacList}>
        {visibleContacts.map(({ id, name, number }) => (
          <ContactsItem id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
