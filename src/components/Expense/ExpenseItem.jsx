import Card from "../../layouts/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDescription from "./ExpenseDescription";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <ExpenseDescription title={title} amount={amount} />
      </Card>
    </li>
  );
};

export default ExpenseItem;
