import PropTypes from 'prop-types';
import { ItemContact, ItemButton } from './ContactsItem.styled';

export const ContactsItem = props => {
  const { items, onRemoveContacts } = props;
  return (
    <>
      {items.map(({ id, name, number }) => (
        <ItemContact key={id}>
          {name}: {number}
          <ItemButton onClick={() => onRemoveContacts(id)}>Delete</ItemButton>
        </ItemContact>
      ))}
    </>
  );
};

ContactsItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContacts: PropTypes.func.isRequired,
};
