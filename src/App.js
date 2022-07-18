import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
import Cookies from "universal-cookie";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Chocolate", date: new Date(2022, 5, 3), expense: 13 },
    { id: 2, title: "Newspaper", date: new Date(2022, 3, 5), expense: 5 },
    { id: 3, title: "Smartphone", date: new Date(2022, 9, 3), expense: 500 },
  ]);

  const cookie = new Cookies();
  if (typeof cookie.get("expenses") == undefined)
    cookie.set("expenses", expenses, { path: "/" });

  const onUpdateHandler = (arr) => {
    cookie.set("expenses", arr, { path: "/" });
  };

  const onSaveExpenseHandler = (savedData) => {
    const finalSavedData = {
      ...savedData,
      id: Math.random() * 100,
    };
    setExpenses((prevState) => {
      const updated = [...prevState, finalSavedData];
      onUpdateHandler(updated);
      return updated;
    });
  };

  return (
    <div>
      <NewExpense onSaveExpense={onSaveExpenseHandler} />
      <Expenses expenseArray={cookie.get("expenses")} />
    </div>
  );
};

export default App;
