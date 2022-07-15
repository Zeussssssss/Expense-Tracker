import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Chocolate", date: new Date(2022, 5, 3), expense: 13 },
    { id: 2, title: "Newspaper", date: new Date(2022, 3, 5), expense: 5 },
    { id: 3, title: "Smartphone", date: new Date(2022, 9, 3), expense: 500 },
  ]);

  const onSaveExpenseHandler = (savedData) => {
    const finalSavedData = {
      ...savedData,
      id: Math.random() * 100,
    };
    console.log(finalSavedData.id);
    setExpenses((prevState) => {
      return [...prevState, finalSavedData];
    });
  };

  return (
    <div>
      <NewExpense onSaveExpense={onSaveExpenseHandler} />
      <Expenses expenseArray={expenses} />
    </div>
  );
};

export default App;
