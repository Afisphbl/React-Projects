import { useEffect } from "react";

function ProfileForm({
  profileCard: [profileCard],
  setProfileCard,
  prevInfo,
  setPrevInfo,
  setIsEdit,
}) {
  const profileKey = [...Object.keys(profileCard)].filter(
    (key) => key !== "avatar",
  );

  useEffect(() => {
    !prevInfo && setPrevInfo(profileCard);
  }, []);

  function handleCancelEdit() {
    setProfileCard([prevInfo]);
    setPrevInfo(null);
    setIsEdit((e) => !e);
  }

  function handleSubmitEdit() {
    setPrevInfo(null);
    setIsEdit((e) => !e);
  }

  return (
    <div className="profile-form">
      {profileKey.map((key) => {
        return (
          <FormGroup
            key={key}
            objKey={key}
            profileCard={profileCard}
            setProfileCard={setProfileCard}
          />
        );
      })}
      <div className="form-actions">
        <button className="cancel-btn" onClick={handleCancelEdit}>
          Cancel
        </button>
        <button className="save-btn" onClick={handleSubmitEdit}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

function FormGroup({ objKey, profileCard, setProfileCard }) {
  function handleInput(e) {
    setProfileCard((prev) => [{ ...prev[0], [objKey]: e.target.value }]);
  }
  return (
    <div className="form-group">
      <label htmlFor={objKey}>{objKey}</label>
      <input
        name={objKey}
        id={objKey}
        value={profileCard[objKey]}
        onChange={handleInput}
      />
    </div>
  );
}

export default ProfileForm;
