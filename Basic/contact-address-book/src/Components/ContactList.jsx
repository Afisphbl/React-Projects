import ContactItem from "./ContactItem";

import "../Styles/ContactList.css";

function ContactList({ contacts, onEditHandler, onDeleteHandler }) {
  const contacts__length = contacts.length;
  return (
    <section className="list-card">
      <h2>Contacts</h2>
      {contacts__length === 0 ? (
        <p className="empty">No contacts yet. Add one above.</p>
      ) : (
        <ul className="contact-list">
          {contacts.map((contact) => {
            return (
              <ContactItem
                key={contact.id}
                contact={contact}
                onEditHandler={onEditHandler}
                onDeleteHandler={onDeleteHandler}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default ContactList;
