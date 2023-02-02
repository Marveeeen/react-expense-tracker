import ExpenseDate from "./ExpenseDate";
import ExpenseDescription from "./ExpenseDescription";

import "./styles.css";

function ExpenseItem({ date, title, amount }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDescription title={title} amount={amount} />
    </div>
  );
}

export default ExpenseItem;
