import { useState } from "react";
import Card from "../../layouts/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import "./styles.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState(2019);

  const filterChangeHandler = (filter) => {
    setFilteredYear(filter);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
