import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';

import { SectionPhonebook, SectionContact, SectionItem } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  inputItem = newItem => {
    const contact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newItem.name.toLowerCase()
    );
    if (contact) {
      alert(`${newItem.name} is already in contacts`);
      return;
    }

    const ContactId = {
      id: nanoid(),
      name: newItem.name,
      number: newItem.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, ContactId],
    }));
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  handleDelete = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <SectionPhonebook>
        <SectionItem>Phonebook</SectionItem>
        <ContactForm addInfo={this.inputItem} />

        <SectionContact>Contacts</SectionContact>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.handleDelete}
        />
      </SectionPhonebook>
    );
  }
}
