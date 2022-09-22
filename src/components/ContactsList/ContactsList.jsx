import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactsItem';
import { ListContacts } from 'components/ContactsList/ContactsList.styled';

export const ContactsList = ({ items, onRemoveContacts }) => {
  return (
    <ListContacts>
      <ContactsItem items={items} onRemoveContacts={onRemoveContacts} />
    </ListContacts>
  );
};

ContactsList.propTypes = {
  items: PropTypes.array.isRequired,
  onRemoveContacts: PropTypes.func.isRequired,
};
