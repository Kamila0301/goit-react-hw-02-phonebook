export const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <ul>
        {filteredItems.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
