import "./Description.css";

function Description({ name, job, location, contact }) {
  return (
    <div className="description">
      <div>
        <h1>{name}</h1>
        <p className="job">{job}</p>
      </div>
      <p className="location">📍{location}</p>
      <a href={contact.github} className="contact">🔗 {contact.github}</a>
      <a href={contact.email} className="contact">✉️ {contact.email}</a>
    </div>
  );
}

export default Description;
