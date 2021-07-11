import shortId from 'shortid';

import actionTypes from './contacts-type';

export const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    id: shortId.generate(),
    name,
    number,
  },
});

export const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
