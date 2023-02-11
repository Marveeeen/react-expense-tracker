import React, { useEffect, useState } from "react";

import { Expenses } from "./components/Expense";
import Modal from "./components/Modal";
import NewExpense from "./components/NewExpense";

import { processExpensesJSON } from "./utils/helperFunctions";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseId, setExpenseId] = useState("");

  useEffect(() => {
    const localExpensesJSON = localStorage.getItem("expenses");
    if (localExpensesJSON) {
      const localExpenses = processExpensesJSON(localExpensesJSON);
      setExpenses(localExpenses);
    }
  }, []);

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  const addExpenseHandler = (newExpense) => {
    const newExpenses = [...expenses, newExpense];
    setExpenses(newExpenses);
  };

  const removeExpenseHandler = () => {
    const newExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(newExpenses);
    closeModalHandler();
  };

  const openModalHandler = (expenseId) => {
    setExpenseId(expenseId);
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setExpenseId("");
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Modal
        isOpen={isModalOpen}
        onCloseModal={closeModalHandler}
        onRemoveExpense={removeExpenseHandler}
      />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onOpenModal={openModalHandler} />
    </div>
  );
};

export default App;
