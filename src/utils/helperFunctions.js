export const processExpensesJSON = (expensesJSON) => {
  const expenses = JSON.parse(expensesJSON);

  const newExpenses = expenses.map((expense) => convertDateOfExpense(expense));

  return newExpenses;
};

const convertDateOfExpense = (expense) => {
  const newExpense = {
    ...expense,
    date: new Date(expense.date),
  };

  return newExpense;
};
