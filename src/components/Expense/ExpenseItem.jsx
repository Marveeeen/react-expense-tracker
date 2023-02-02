import Card from "../../layouts/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDescription from "./ExpenseDescription";

function ExpenseItem({ date, title, amount }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDescription title={title} amount={amount} />
    </Card>
  );
}

export default ExpenseItem;
