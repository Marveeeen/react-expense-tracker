import React, { useState } from "react";

import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ onSaveData, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeHandler = (e) => {
    const keyName = e.target.name;
    const value = e.target.value;

    setFormData((prevState) => {
      return { ...prevState, [keyName]: value };
    });
  };

  const resetFormData = () => {
    setFormData({ title: "", amount: "", date: "" });
  };

  const submitFormDataHandler = (e) => {
    e.preventDefault();
    onSaveData(formData);
    resetFormData();
  };

  return (
    <form onSubmit={submitFormDataHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={styles["new-expense__control"]}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            value={formData.amount}
            onChange={changeHandler}
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            max="2025-12-31"
            value={formData.date}
            onChange={changeHandler}
            required
          />
        </div>
      </div>
      <div className={styles["new-expense__actions"]}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
