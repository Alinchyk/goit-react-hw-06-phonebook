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
const getContacts = createAction('phonebook/get');
const changeFilter = createAction('phonebook/filter');

const phonebookActions = {
  deleteContact,
  addContact,
  changeFilter,
  getContacts,
};
export default phonebookActions;
