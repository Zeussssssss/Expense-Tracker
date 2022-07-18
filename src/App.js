import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
import Cookies from "universal-cookie";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const cookie = new Cookies();
  console.log(typeof cookie.get("expenses"));
  if (typeof cookie.get("expenses") == "undefined") {
    cookie.set("expenses", expenses, { path: "/" });
  }
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
