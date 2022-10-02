import PropTypes from 'prop-types';
import { ContactPerson } from "components/ContactPerson/ContactPerson";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map((
                { id, name, number }
            ) => (
                <ContactPerson
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </ul>);
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};