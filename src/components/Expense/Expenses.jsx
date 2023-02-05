import { useState } from "react";
import Card from "../../layouts/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

import "./styles.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState(2019);

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(Number(selectedYear));
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
