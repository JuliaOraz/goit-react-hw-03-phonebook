import PropTypes from 'prop-types';
import {
  FilterInput,
  FilterLabel,
} from 'components/ContactsFilter/ContactsFilter.styled';

export const ContactsFilter = ({ filter, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </FilterLabel>
  );
};

ContactsFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
