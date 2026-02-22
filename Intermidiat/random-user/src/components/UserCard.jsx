import "../styles/UserCard.css";

function UserCard({ data }) {
  if (!data) return;
  const {
    name,
    email,
    location: { country },
    dob: { age },
    picture: { large },
  } = data;

  const fullName = `${name.title} ${name.first} ${name.last}`;
  return (
    <section className="user-card">
      <div className="user-avatar-container">
        <img className="user-avatar" src={large} alt={fullName} />
      </div>
      <h2 className="user-name">{fullName}</h2>

      <div className="user-details">
        <Item icon="✉️" text={email} />
        <Item icon="🌍" text={country} />
        <Item icon="🎂" text={`${age} years old`} />
      </div>
    </section>
  );
}

function Item({ icon, text }) {
  return (
    <div className="detail-item">
      <span className="icon">{icon}</span>
      <p className="text">{text}</p>
    </div>
  );
}

export default UserCard;
