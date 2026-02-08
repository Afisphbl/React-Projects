function ProfileCard({ profileCard: [profileCard], setIsEdit }) {
  const profileKey = [...Object.keys(profileCard)].filter(
    (key) => key !== "name" && key !== "job" && key !== "avatar",
  );

  function handleIsEdit() {
    setIsEdit((e) => !e);
  }
  return (
    <>
      <ProfileHeader profileCard={profileCard} />
      <div className="profile-body">
        {profileKey.map((key) => {
          return (
            <ProfileInfo key={key} objKey={key} profileCard={profileCard} />
          );
        })}
      </div>

      <button className="edit-btn" onClick={handleIsEdit}>
        Edit Profile
      </button>
    </>
  );
}

function ProfileHeader({ profileCard }) {
  return (
    <div className="profile-header">
      <img className="profile-avatar" src={profileCard.avatar} alt="Profile" />
      <h2>{profileCard.name}</h2>
      <span className="profile-job">{profileCard.job}</span>
    </div>
  );
}

function ProfileInfo({ objKey, profileCard }) {
  return (
    <div className="profile-info">
      <strong>{objKey}</strong>
      <span>{profileCard[objKey]}</span>
    </div>
  );
}

export default ProfileCard;
