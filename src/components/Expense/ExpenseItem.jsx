import Card from "../../layouts/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDescription from "./ExpenseDescription";

const ExpenseItem = ({ date, title, amount, onOpenModal }) => {
  return (
    <li onDoubleClick={onOpenModal}>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <ExpenseDescription title={title} amount={amount} />
      </Card>
    </li>
  );
};

export default ExpenseItem;
