import React, { useEffect, useState } from "react";

import Expenses from "./components/Expense";
import NewExpense from "./components/NewExpense";

import { processExpensesJSON } from "./utils/helperFunctions";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const localExpensesJSON = localStorage.getItem("expenses");
    if (localExpensesJSON) {
      const localExpenses = processExpensesJSON(localExpensesJSON);
      setExpenses(localExpenses);
    }
  }, []);

  const addExpenseHandler = (newExpense) => {
    const newExpenses = [...expenses, newExpense];
    localStorage.setItem("expenses", JSON.stringify(newExpenses));
    setExpenses((prevExpense) => [...prevExpense, newExpense]);
  };

  const modalChangeHandler = (isModalOpen) => {
    setIsModalOpen(isModalOpen);
  };

  return (
    <div className="App">
      <NewExpense
        onAddExpense={addExpenseHandler}
        isModalOpen={isModalOpen}
        onModalChange={modalChangeHandler}
      />
      <Expenses expenses={expenses} onModalChange={modalChangeHandler} />
    </div>
  );
};

export default App;
