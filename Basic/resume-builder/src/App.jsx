import { useState } from "react";
import ProfileForm from "./Components/ProfileForm";
import ProfilePreview from "./Components/ProfilePreview";

import "./Styles/App.css";

function App() {
  const [resume, setResume] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    skill: "",
  });

  function onSaveHandler(profile) {
    setResume((prevResume) => ({ ...prevResume, ...profile }));
  }

  function onAddResumeHandler(key, value) {
    setResume((prevResume) => ({ ...prevResume, [key]: value }));
  }

  function onResetHandler() {
    setResume({
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
      skill: "",
    });
  }
  return (
    <article className="app">
      <h1 className="app__title">Personal Profile / Resume Builder</h1>
      <main className="app__layout">
        <ProfileForm
          onSave={onSaveHandler}
          onAddResume={onAddResumeHandler}
          onReset={onResetHandler}
        />
        <ProfilePreview resume={resume} />
      </main>
    </article>
  );
}

export default App;
