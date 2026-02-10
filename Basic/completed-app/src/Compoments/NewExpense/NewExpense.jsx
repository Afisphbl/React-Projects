import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "../../Styles/NewExpense.css";

function NewExpense({ expense, setExpense }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          expense={expense}
          setExpense={setExpense}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
}

export default NewExpense;
