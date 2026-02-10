import ExpenseDate from "./ExpenseDate";

import "../../Styles/ExpenseItem.css";

function ExpenseItem({ expense }) {
  return (
    <li className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={expense.date} />
        <h2>{expense.title}</h2>
      </div>
      <div className="expense-item__price">${expense.amount.toFixed(2)}</div>
    </li>
  );
}

export default ExpenseItem;
