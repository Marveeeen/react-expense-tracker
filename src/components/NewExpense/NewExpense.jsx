import React from "react";
import Card from "../../layouts/Card";

import ExpenseForm from "./ExpenseForm";

import "./styles.css";

const NewExpense = () => {
  return (
    <Card className="new-expense">
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
