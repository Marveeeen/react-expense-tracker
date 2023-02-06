import React from "react";

import styles from "./ExpenseDescription.module.css";

const ExpenseDescription = ({ title, amount }) => {
  return (
    <div className={styles["expense-item__description"]}>
      <h2>{title}</h2>
      <div className={styles["expense-item__price"]}>${amount}</div>
    </div>
  );
};

export default ExpenseDescription;
