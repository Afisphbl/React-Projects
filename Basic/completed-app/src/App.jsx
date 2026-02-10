import NewExpense from "./Compoments/NewExpense/NewExpense";
import Expense from "./Compoments/Expense/Expense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2027, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2028, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2028, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2026, 5, 12),
  },
];

function App() {
  const [expense, setExpense] = useState(DUMMY_EXPENSES);
  return (
    <div>
      <NewExpense expense={expense} setExpense={setExpense} />
      <Expense expense={expense} />
    </div>
  );
}

export default App;
