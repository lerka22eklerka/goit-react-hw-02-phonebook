import PropTypes from 'prop-types';
import { ContactBox } from './ContactPerson.styled';

export const ContactPerson = ({ name, number, id, onDeleteContact }) => {
  return (
    <li>
      <ContactBox>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </ContactBox>
    </li>
  );
};

ContactPerson.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};