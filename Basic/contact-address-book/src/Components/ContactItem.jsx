import "../Styles/ContactItem.css";

function ContactItem({ contact, onEditHandler, onDeleteHandler }) {
  return (
    <li className="contact-item">
      <div className="contact-main">
        <span className="contact-name">{contact.name}</span>
        <div className="contact-meta">
          <span>{contact.phone}</span>
          <span> {contact.email} </span>
          <span> {contact.city} </span>
        </div>
        <span className="contact-notes"> {contact.note} </span>
      </div>
      <div className="contact-actions">
        <button className="ghost" onClick={() => onEditHandler(contact.id)}>
          Edit
        </button>
        <button className="danger" onClick={() => onDeleteHandler(contact.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ContactItem;
