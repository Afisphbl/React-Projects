import { useState } from "react";

function Form({ onSubmitHandler }) {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");
  const [isValid, setIsValid] = useState(true);

  function inputHandler(e) {
    const { name, value } = e.target;

    setIsValid(true);

    if (name === `quantity`) setQuantity(value);
    if (name === "item") setItem(value);
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!item) {
      setIsValid(!isValid);
      return;
    }

    const newItem = {
      quantity,
      item,
      id: Date.now(),
      isPacked: false,
    };

    setIsValid(true);

    onSubmitHandler(newItem);
  }
  return (
    <section className="add-form">
      <h3>What do you need for your pack 😍 trip?</h3>

      <form onSubmit={submitHandler}>
        <select name="quantity" onChange={inputHandler}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="item"
          value={item}
          placeholder="Item..."
          onChange={inputHandler}
          className={!isValid ? "invalid" : ""}
        />
        <button type="submit">add</button>
      </form>
    </section>
  );
}

export default Form;
