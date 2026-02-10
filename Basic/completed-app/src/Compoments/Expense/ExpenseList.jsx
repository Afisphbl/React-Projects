import ExpenseItem from "./ExpenseItem";

import "../../Styles/ExpenseList.css";

function ExpenseList({ expenses }) {
  return (
    <>
      {expenses.length === 0 ? (
        <h1 className="expenses-list__fallback">No expenses found</h1>
      ) : (
        <ul className="expenses-list">
          {expenses.map((expense) => {
            return <ExpenseItem key={expense.id} expense={expense} />;
          })}
        </ul>
      )}
    </>
  );
}

export default ExpenseList;
