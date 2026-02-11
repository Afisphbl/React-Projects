import { useEffect, useState } from "react";
import "../Styles/ContactForm.css";

function ContactForm({
  onAddContacts,
  editContact: [editContact],
  updateEditHandler,
  onCancelEditHandler,
}) {
  const [contact, setContacts] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    note: "",
  });

  const [invalid, setInvalid] = useState({
    name: false,
    phone: false,
  });

  useEffect(() => {
    if (editContact) setContacts(editContact);
  }, [editContact]);

  function onAddInputHandler(name, value) {
    setContacts((prevContact) => ({ ...prevContact, [name]: value }));
    setInvalid((prevInvalid) => ({ ...prevInvalid, [name]: false }));
  }

  function cancelEditHandler() {
    setContacts({
      name: "",
      phone: "",
      email: "",
      city: "",
      note: "",
    });
    onCancelEditHandler();
  }

  function addContactSubmitHandler(e) {
    e.preventDefault();
    if (!contact.name.trim() && !contact.phone.trim()) {
      setInvalid((prevInvalid) => ({
        ...prevInvalid,
        name: true,
        phone: true,
      }));
      return;
    }

    if (!contact.name.trim()) {
      setInvalid((prevInvalid) => ({
        ...prevInvalid,
        name: true,
      }));
      return;
    }

    if (!contact.phone.trim()) {
      setInvalid((prevInvalid) => ({
        ...prevInvalid,
        phone: true,
      }));
      return;
    }

    if (editContact) {
      updateEditHandler(contact);
      setContacts({
        name: "",
        phone: "",
        email: "",
        city: "",
        note: "",
      });
      return;
    }

    const newContact = {
      ...contact,
      id: Date.now(),
    };

    onAddContacts(newContact);

    setContacts({
      name: "",
      phone: "",
      email: "",
      city: "",
      note: "",
    });
  }

  return (
    <section className="form-card">
      <h2>Add Contact</h2>
      <form onSubmit={addContactSubmitHandler}>
        <Input
          type="text"
          nameP="Name"
          valueP={contact.name}
          placeholder={"Full name"}
          onChange={onAddInputHandler}
          invalid={invalid.name}
        />
        <Input
          type="tel"
          nameP="Phone"
          valueP={contact.phone}
          placeholder={"0923-456-789"}
          onChange={onAddInputHandler}
          invalid={invalid.phone}
        />
        <Input
          type="email"
          nameP="Email"
          valueP={contact.email}
          placeholder={"name@example.com"}
          onChange={onAddInputHandler}
        />
        <Input
          type="text"
          nameP="City"
          valueP={contact.city}
          placeholder={"City"}
          onChange={onAddInputHandler}
        />
        <Input
          nameP="Note"
          valueP={contact.note}
          placeholder="Notes about this contact"
          onChange={onAddInputHandler}
        />
        <div className="actions">
          <Button
            text={editContact ? "Update" : "Add Contact"}
            className="primary"
            type="submit"
          />
          {editContact && (
            <Button
              text="Cancel"
              type="button"
              className="secondary"
              onClick={cancelEditHandler}
            />
          )}
        </div>
      </form>
    </section>
  );
}

function Input({ type, nameP, valueP, placeholder, onChange, invalid }) {
  const [_, setInput] = useState("");

  function addInputHandler(e) {
    const { name, value } = e.target;
    setInput(value);

    onChange(name.toLowerCase(), value);
  }

  return (
    <>
      <label htmlFor={nameP}>{nameP}</label>
      {nameP === "Note" ? (
        <textarea
          name={nameP}
          id={nameP}
          value={valueP}
          onChange={addInputHandler}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          name={nameP}
          id={nameP}
          value={valueP ?? ""}
          onChange={addInputHandler}
          placeholder={placeholder}
          className={invalid ? "invalid" : ""}
        />
      )}
    </>
  );
}

function Button({ text, className, type, onClick }) {
  return (
    <button
      type={type}
      className={className}
      {...(type === "button" && { onClick })}
    >
      {text}
    </button>
  );
}

export default ContactForm;
