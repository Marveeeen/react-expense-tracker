import React, { useState } from "react";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const onChangeHandler = (e) => {
    const keyName = e.target.name;
    const value = e.target.value;

    setFormData((prevState) => {
      return { ...prevState, [keyName]: value };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            value={formData.amount}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            max="2025-12-31"
            value={formData.date}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
