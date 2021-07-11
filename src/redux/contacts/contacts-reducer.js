import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contacts from '../../contacts.json';
import actions from './contacts-actions';

const items = createReducer(contacts, {
  [actions.addContact]: (state, { payload }) => [payload, ...state],

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
