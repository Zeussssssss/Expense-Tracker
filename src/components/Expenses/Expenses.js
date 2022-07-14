import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const expenses = props.expenseArray;
  const [selectedYear, setSelectedYear] = useState("");

  const onYearSelectHandler = (yearOption) => {
    setSelectedYear(yearOption);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onYearSelect={onYearSelectHandler}></ExpensesFilter>
      <ExpenseItem
        item={expenses[0].title}
        date={expenses[0].date}
        expense={expenses[0].expense}
      ></ExpenseItem>
      <ExpenseItem
        item={expenses[1].title}
        date={expenses[1].date}
        expense={expenses[1].expense}
      ></ExpenseItem>
      <ExpenseItem
        item={expenses[2].title}
        date={expenses[2].date}
        expense={expenses[2].expense}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
