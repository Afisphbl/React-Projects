import { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

import "../../Styles/Expense.css";

function Expense({ expense }) {
  const [filteredYear, setFilteredYear] = useState("2026");

  const filteredExpenses = expense.filter(
    (item) => item.date.getFullYear().toString() === filteredYear,
  );
  return (
    <div className="expense">
      <ExpenseFilter
        setFilteredYear={setFilteredYear}
        filteredYear={filteredYear}
      />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}

export default Expense;
