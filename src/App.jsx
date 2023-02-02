import { Expenses } from "./components/Expense";

function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2023, 1, 30),
      title: "Car insurance",
      amount: 295.64,
    },
    {
      id: "e2",
      date: new Date(2023, 1, 31),
      title: "House",
      amount: 150.64,
    },
    {
      id: "e3",
      date: new Date(2023, 2, 1),
      title: "Grocery",
      amount: 59.75,
    },
    {
      id: "e4",
      date: new Date(2023, 2, 3),
      title: "Gas",
      amount: 20.65,
    },
  ];

  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
