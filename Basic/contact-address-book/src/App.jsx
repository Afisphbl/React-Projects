import { useState } from "react";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";

import "./Styles/App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState([]);

  function onAddContacts(newContact) {
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  }

  function onEditHandler(id) {
    setEditContact(contacts.filter((contact) => contact.id === id));
  }

  function updateEditHandler(contact) {
    setContacts((prevContacts) =>
      prevContacts.map((prevContact) =>
        prevContact.id === contact.id
          ? { ...prevContact, ...contact }
          : prevContact,
      ),
    );
    onCancelEditHandler();
  }

  function onCancelEditHandler() {
    setEditContact([]);
  }

  function onDeleteHandler(id) {
    setContacts((prevContacts) =>
      prevContacts.filter((prevContact) => prevContact.id !== id),
    );
  }

  return (
    <article className="app">
      <h1>Contact Book</h1>
      <ContactForm
        onAddContacts={onAddContacts}
        editContact={editContact}
        updateEditHandler={updateEditHandler}
        onCancelEditHandler={onCancelEditHandler}
      />
      <ContactList
        contacts={contacts}
        onEditHandler={onEditHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </article>
  );
}

export default App;
