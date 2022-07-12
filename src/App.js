import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Chocolate", date: new Date(2022, 5, 3), expense: 13 },
    { title: "Newspaper", date: new Date(2022, 3, 5), expense: 5 },
    { title: "Smartphone", date: new Date(2022, 9, 3), expense: 500 },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expenseArray={expenses} />
    </div>
  );
};

export default App;
