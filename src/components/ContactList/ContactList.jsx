import PropTypes from 'prop-types';
import { List, ListItem, ContactName, ContactNumber, DeleteButton } from './ContactList.styled';
import { FaTrash } from 'react-icons/fa';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <ContactName>{name}:</ContactName>
        <ContactNumber>{number}</ContactNumber>
        <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
          <FaTrash />
        </DeleteButton>
      </ListItem>
    ))}
  </List>
);

export default ContactList;

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