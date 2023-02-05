import React from "react";

import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onOpenModal }) => {
  if (expenses.length === 0) {
    return <h2 className="expense-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
