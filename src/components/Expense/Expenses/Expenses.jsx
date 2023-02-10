import { useState } from "react";
import Card from "../../../layouts/Card";
import ExpenseFilter from "../ExpenseFilter";
import ExpenseList from "../ExpenseList";
import ExpensesChart from "../ExpensesChart";

import styles from "./Expenses.module.css";

const Expenses = ({ expenses, onOpenModal }) => {
  const [filteredYear, setFilteredYear] = useState(2019);

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(Number(selectedYear));
  };

  return (
    <Card className={styles.expenses}>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} onOpenModal={onOpenModal} />
    </Card>
  );
};

export default Expenses;
