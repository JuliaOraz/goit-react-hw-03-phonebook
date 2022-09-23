import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm } from 'components/ContactsForm';
import { ContactsFilter } from 'components/ContactsFilter';
import { ContactsList } from 'components/ContactsList';
import {
  ContainerPhoneBook,
  TitlePhoneBook,
} from 'components/PhoneBook/PhoneBook.styled';

export class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContacts = contact => {
    const { contacts } = this.state;
    const searchDuplicate = contacts.find(item => item.name === contact.name);

    if (searchDuplicate) {
      return alert(`${contact.name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  removeContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({
      [name]: value,
    });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
  };

  render() {
    const { addContacts, onChange, removeContacts } = this;
    const { filter } = this.state;
    const contacts = this.getFilterContacts();
    return (
      <ContainerPhoneBook>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactsForm addContacts={addContacts} />

        <TitlePhoneBook>Contacts</TitlePhoneBook>
        {this.state.contacts.length > 0 ? (
          <>
            <ContactsFilter onChange={onChange} filter={filter} />
            <ContactsList items={contacts} onRemoveContacts={removeContacts} />
          </>
        ) : (
          'There are no contacts'
        )}
      </ContainerPhoneBook>
    );
  }
}
