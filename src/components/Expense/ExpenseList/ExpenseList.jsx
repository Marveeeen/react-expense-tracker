import React from "react";

import ExpenseItem from "../ExpenseItem";

import styles from "./ExpenseList.module.css";

const ExpenseList = ({ expenses, onOpenModal }) => {
  if (expenses.length === 0) {
    return (
      <h2 className={styles["expense-list__fallback"]}>No expenses found.</h2>
    );
  }

  return (
    <ul className={styles["expense-list"]}>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseId={expense.id}
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
