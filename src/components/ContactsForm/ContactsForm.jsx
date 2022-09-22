import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormContacts,
  FormLabel,
  FormInput,
  FormButton,
} from 'components/ContactsForm/ContactsForm.styled';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  onChangeForm = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContacts({ name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { nameId, numberId, onSubmitForm, onChangeForm } = this;

    return (
      <FormContacts onSubmit={onSubmitForm}>
        <FormLabel htmlFor={nameId}>
          Name
          <FormInput
            id={nameId}
            type="tel"
            name="name"
            value={name}
            onChange={onChangeForm}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor={numberId}>
          Number
          <FormInput
            id={numberId}
            type="tel"
            name="number"
            value={number}
            onChange={this.onChangeForm}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </FormContacts>
    );
  }
}

ContactsForm.propTypes = {
  addContacts: PropTypes.func.isRequired,
};
