import Card from "../../layouts/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDescription from "./ExpenseDescription";

const ExpenseItem = ({ expenseId, date, title, amount, onOpenModal }) => {
  const doubleClickItemHandler = () => {
    onOpenModal(expenseId);
  };

  return (
    <li onDoubleClick={doubleClickItemHandler}>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <ExpenseDescription title={title} amount={amount} />
      </Card>
    </li>
  );
};

export default ExpenseItem;
