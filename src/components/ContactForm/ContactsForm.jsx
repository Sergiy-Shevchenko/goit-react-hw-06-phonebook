
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactsForm = () => {
 
const dispatch = useDispatch();
  
  
  const hendleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name)
    const number = event.target.number.value; 
    console.log(number)

    dispatch ({type: 'contacts/addContact', payload: {
      id: nanoid(),
      name: name,
      number:number,
    }})



  };

  return (
    <div className={css.section}>
      <form className={css.form} onSubmit={hendleSubmit}>
        <label className={css.inputName}>
          Name
          <input
            className={css.input}
            type="text"
            // value={name}
            // onChange={handleChangeInputName}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            placeholder="Please enter your name"
          />
        </label>
        <label className={css.inputName}>
          Number
          <input
            className={css.input}
            type="tel"
            // value={number}
            // onChange={handleChangeinputNumber}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
            placeholder="Please enter your number"
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};


















//--------------------------------------------------------------------------------4-d-z----------------------------------------------------------
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactForm.module.css';

// export const ContactsForm = ({ addContactProps }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChangeInputName = ({ target: { value } }) => {
//     setName(value);
//   };

//   const handleChangeinputNumber = ({ target: { value } }) => {
//     setNumber(value);
//   };

//   const hendleSubmit = event => {
//     event.preventDefault();

//     addContactProps({ name, number });

//     setName('');
//     setNumber('');
//   };

//   return (
//     <div className={css.section}>
//       <form className={css.form} onSubmit={hendleSubmit}>
//         <label className={css.inputName}>
//           Name
//           <input
//             className={css.input}
//             type="text"
//             value={name}
//             onChange={handleChangeInputName}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             // required
//             placeholder="Please enter your name"
//           />
//         </label>
//         <label className={css.inputName}>
//           Number
//           <input
//             className={css.input}
//             type="tel"
//             value={number}
//             onChange={handleChangeinputNumber}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             // required
//             placeholder="Please enter your number"
//           />
//         </label>
//         <button type="submit" className={css.button}>
//           Add contact
//         </button>
//       </form>
//     </div>
//   );
// };

// ContactsForm.propTypes = {
//   addContactProps: PropTypes.func.isRequired,
// };

