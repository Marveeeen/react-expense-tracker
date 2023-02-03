import React from "react";
import Card from "../../layouts/Card";

import ExpenseForm from "./ExpenseForm";

import "./styles.css";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };

    expenseData.date = new Date(expenseData.date);

    onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveData={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
