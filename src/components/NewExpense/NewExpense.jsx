import React, { useState } from "react";
import Card from "../../layouts/Card";

import ExpenseForm from "./ExpenseForm";
import ExpenseModal from "./ExpenseModal";

import "./styles.css";

const NewExpense = ({ onAddExpense, isModalOpen, onModalChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };

    expenseData.date = new Date(expenseData.date);

    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEdittingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const closeModalHandler = () => {
    onModalChange(false);
  };

  let content = <button onClick={startEdittingHandler}>Add New Expense</button>;

  if (isEditing) {
    content = (
      <ExpenseForm
        onSaveData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    );
  }

  return (
    <Card className="new-expense">
      <ExpenseModal isOpen={isModalOpen} onCloseModal={closeModalHandler} />
      {content}
    </Card>
  );
};

export default NewExpense;
