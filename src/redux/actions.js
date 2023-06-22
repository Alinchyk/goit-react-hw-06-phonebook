import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('phonebook/add', input => ({
  payload: {
    id: nanoid(),
    name: input.name,
    number: input.number,
  },
}));

const deleteContact = createAction('phonebook/delete');
const changeFilter = createAction('phonebook/filter');

const actions = {
  deleteContact,
  addContact,
  changeFilter,
};

export default actions;
