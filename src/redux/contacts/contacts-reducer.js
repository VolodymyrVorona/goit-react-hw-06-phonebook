import { combineReducers } from 'redux';
import contacts from '../../contacts.json';
import actionsTypes from './contacts-type';

const items = (state = contacts, { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD:
      return [payload, ...state];

    case actionsTypes.DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionsTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
