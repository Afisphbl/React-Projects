import { useState } from "react";

import Logo from "./Components/Logo";
import Form from "./Components/Form";
import Lists from "./Components/Lists";
import Footer from "./Components/Footer";

function App() {
  const [items, setItems] = useState([]);

  function onSubmitHandler(newItem) {
    setItems((prevItem) => [newItem, ...prevItem]);
  }

  function onIsPacked(id) {
    setItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item,
      ),
    );
  }

  function onDeleteHandler(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function onClearHandler() {
    setItems([]);
  }
  return (
    <article className="app">
      <Logo />
      <Form onSubmitHandler={onSubmitHandler} />
      <Lists
        items={items}
        onIsPacked={onIsPacked}
        onDeleteHandler={onDeleteHandler}
        onClearHandler={onClearHandler}
      />
      <Footer items={items} />
    </article>
  );
}

export default App;
