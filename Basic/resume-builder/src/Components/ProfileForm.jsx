import { useState } from "react";
import "../Styles/ProfileForm.css";

const dataInput = [
  {
    id: crypto.randomUUID(),
    name: "name",
    text: "Name",
    type: "text",
    placeholder: "Enter full name",
    requaired: true,
  },
  {
    id: crypto.randomUUID(),
    name: "job",
    text: "Job Title / Profession",
    type: "text",
    placeholder: "Enter job title",
  },
  {
    id: crypto.randomUUID(),
    name: "email",
    text: "Email",
    type: "email",
    placeholder: "Enter email",
  },
  {
    id: crypto.randomUUID(),
    name: "phone",
    text: "Phone Number",
    type: "tel",
    placeholder: "Enter phone number",
  },
  {
    id: crypto.randomUUID(),
    name: "location",
    text: "Location / City",
    type: "text",
    placeholder: "Enter address",
  },
  {
    id: crypto.randomUUID(),
    name: "summary",
    text: "About Me / Summary",
    type: null,
    placeholder: "A short professional summary...",
  },
  {
    id: crypto.randomUUID(),
    name: "skill",
    text: "Skills (comma separated)",
    type: "text",
    placeholder: "React, JavaScript, CSS",
  },
];

const dataButton = [
  {
    id: crypto.randomUUID(),
    text: "Save / Preview",
    type: "submit",
    className: "profile-form__button--primary",
  },
  {
    id: crypto.randomUUID(),
    text: "Clear Form",
    type: "reset",
    className: " profile-form__button--secondary",
  },
];

function ProfileForm({ onSave, onAddResume, onReset }) {
  const [profile, setProfile] = useState({});

  function onInputChangeHandler(key, value) {
    setProfile((prevProfile) => ({ ...prevProfile, [key]: value }));
    onAddResume(key, value);
  }

  function submitHandler(e) {
    e.preventDefault();
    onSave(profile);
  }

  function resetHandler() {
    setProfile({});
    onReset();
  }
  return (
    <section className="profile-form">
      <h1 className="profile-form__title">Your Details</h1>
      <form onSubmit={submitHandler}>
        {dataInput.map((data) => {
          return (
            <Input key={data.id} {...data} onChange={onInputChangeHandler} />
          );
        })}
        <div className="profile-form__actions">
          {dataButton.map((data) => {
            return <Button key={data.id} {...data} onClick={resetHandler} />;
          })}
        </div>
      </form>
    </section>
  );
}

function Input({ name, text, type, placeholder, onChange }) {
  const [input, setInput] = useState("");

  function inputHandler(e) {
    const { name, value } = e.target;

    setInput(value);

    onChange(name, value);
  }
  return (
    <>
      <label htmlFor={name} className="profile-form__label">
        {text}
      </label>
      {name === "summary" ? (
        <textarea
          className="profile-form__textarea"
          name={name}
          id={name}
          value={input}
          placeholder={placeholder}
          onChange={inputHandler}
        ></textarea>
      ) : (
        <input
          className="profile-form__input"
          type={type}
          name={name}
          id={name}
          value={input}
          placeholder={placeholder}
          onChange={inputHandler}
        />
      )}
    </>
  );
}

function Button({ text, type, className, onClick }) {
  return (
    <button
      className={`profile-form__button ${className}`}
      type={type}
      {...(type === "reset" && { onClick })}
    >
      {text}
    </button>
  );
}

export default ProfileForm;
