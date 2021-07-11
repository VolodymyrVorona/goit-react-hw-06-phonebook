import { createAction } from '@reduxjs/toolkit';
import shortId from 'shortid';

const addContact = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: shortId.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contact/delete');

const changeFilter = createAction('contact/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
