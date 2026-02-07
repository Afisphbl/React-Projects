import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const maxtextLength = 100;
  return (
    <div className="app-container">
      <div className="playground-box">
        <h1>Controlled Input Playground</h1>
        <Input text={text} setText={setText} />
        <p className="stats">
          Characters : {text.length} / {maxtextLength}
          {text.length >= maxtextLength && (
            <span className="warning">Max length reached!</span>
          )}
        </p>
        <LivePreview text={text} />
      </div>
    </div>
  );
}

function Input({ text, setText }) {
  function inputHandler(e) {
    if (text.length < 100) setText(e.target.value);
  }

  function toggleHandler() {
    setText((t) => (t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase()));
  }

  return (
    <div className="input-group">
      <input
        className="text-input"
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={inputHandler}
      />
      <button className="toggle-btn" onClick={toggleHandler}>
        Toggle Case
      </button>
    </div>
  );
}

function LivePreview({ text }) {
  return (
    <div className="preview-section">
      <h3>Live Preview:</h3>
      <p className="preview-text">
        {text ? `${text}` : "Your text will appear here..."}
      </p>
    </div>
  );
}

export default App;
