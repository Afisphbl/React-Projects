import { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";
import "./App.css";

function App() {
  const [profileCard, setProfileCard] = useState([
    {
      name: "Abduselam Seid",
      email: "abuabdurehman0308@gmail.com",
      job: "Frontend Developer",
      location: "Addis Ababa, Ethiopia",
      avatar: "/avatar.png",
    },
  ]);
  const [prevInfo, setPrevInfo] = useState(null);
  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="app-container">
      <div className="profile-card">
        {isEdit ? (
          <ProfileForm
            profileCard={profileCard}
            setProfileCard={setProfileCard}
            prevInfo={prevInfo}
            setPrevInfo={setPrevInfo}
            setIsEdit={setIsEdit}
          />
        ) : (
          <ProfileCard profileCard={profileCard} setIsEdit={setIsEdit} />
        )}
      </div>
    </div>
  );
}

export default App;
