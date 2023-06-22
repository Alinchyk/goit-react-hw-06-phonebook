import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/actions';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelete = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button className={s.btn} type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
