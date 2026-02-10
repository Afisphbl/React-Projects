import { useState } from "react";
import "../../Styles/ExpenseForm.css";

function ExpenseForm({ expense, setExpense, setShowForm }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function inputHandler(e) {
    const { name, value } = e.target;
    {
      name === "title" && setTitle(value);
    }
    {
      name === "amount" && setAmount(+value);
    }
    {
      name === "date" && setDate(value);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!title || !amount || amount < 1 || !date) return;

    const newExpense = {
      title: title,
      amount: amount,
      date: new Date(date),
      id: Date.now(),
    };
    setExpense((prev) => [newExpense, ...prev]);
    setShowForm(false);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={inputHandler}
            name="title"
            id="title"
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={inputHandler}
            name="amount"
            id="amount"
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={date}
            onChange={inputHandler}
            name="date"
            id="date"
            min={"2026-01-01"}
            max={"2029-12-31"}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={() => setShowForm(false)}>Cancel</button>
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
