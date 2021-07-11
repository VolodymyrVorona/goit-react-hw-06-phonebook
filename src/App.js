import { Component } from 'react';

import ContactForm from './Components/ContactForm';
import ContactsList from './Components/ContactList';
import Filter from './Components/Filter';

import st from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={st.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

export default App;
