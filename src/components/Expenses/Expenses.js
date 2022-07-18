import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("0000");

  const onYearSelectHandler = (yearOption) => {
    setSelectedYear(yearOption);
  };

  let expenses = props.expenseArray;
  if (selectedYear === "0000") {
    expenses = props.expenseArray;
  } else {
    expenses = props.expenseArray.filter((exp) => {
      const date = new Date(exp.date);
      return date.getFullYear() === selectedYear;
    });
  }

  const expenseTags = expenses.map((exp) => (
    <ExpenseItem
      key={exp.id}
      item={exp.title}
      date={exp.date}
      expense={exp.expense}
    />
  ));

  return (
    <Card className="expenses">
      <ExpensesFilter onYearSelect={onYearSelectHandler}></ExpensesFilter>
      <ExpenseChart expenseArray={expenses} />
      <ExpenseList expenseList={expenseTags} />
    </Card>
  );
};

export default Expenses;
