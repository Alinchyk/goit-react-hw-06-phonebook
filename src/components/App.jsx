import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css'

export default class App extends Component {
  state = {
   contacts: [],
   filter: ''
}
    componentDidMount() {
    const contactsData = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contactsData )

    if(parsedContacts) { this.setState({contactsData : parsedContacts})}
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  // formSubmitHandler = ({ name, number }) => {
  //   this.setState(({ contacts }) => {
  //   const isContact = contacts.find(contact => contact.name === name);

  //     if (isContact) {
  //       alert(`${name} is already in contact`);
  //       return contacts;
  //     } else {
  //       const newContact = {
  //       id: nanoid(),
  //       name,
  //       number,
  //     };
  //       return {
  //         contacts: [...contacts, newContact],
  //       };
  //     }
  //   });
  // };


  render() {

    return (
    <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
         <ContactForm />

        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList />
</div>)
}
}
