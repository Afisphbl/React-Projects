import "../Styles/ProfilePreview.css";

function ProfilePreview({ resume }) {
  const { name, job, email, phone, location, summary, skill } = resume;

  const skills = skill.split(",").map((skill) => skill.trim());

  return (
    <section className="profile-preview">
      <div className="profile-preview__header">
        <h2 className="profile-preview__name">{name || "Your Name"}</h2>
        <p className="profile-preview__title">{job || "Your Job Title"}</p>
      </div>

      <div className="profile-preview__contact">
        <span>{email || "email@example.com"}</span>
        <span>{phone || "Phone"}</span>
        <span>{location || "Location"}</span>
      </div>

      <div className="profile-preview__section">
        <h3>About Me</h3>
        <p className="profile-preview__summary">
          {summary || "Write a short professional summary here."}
        </p>
      </div>
      <div className="profile-preview__section">
        <h3>Skills</h3>
        <div className="profile-preview__skills">
          {skill ? (
            skills.map((skill) => (
              <span key={skill} className="profile-preview__skill">
                {skill}
              </span>
            ))
          ) : (
            <span className="profile-preview__placeholder">
              Add skills separated by commas.
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfilePreview;
