import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(1111);

  const onYearSelectHandler = (yearOption) => {
    setSelectedYear(yearOption);
  };

  let expenses = props.expenseArray;

  //eslint-disable-next-line
  if (selectedYear == 1111) {
    expenses = props.expenseArray;
  } else {
    console.log(typeof selectedYear);
    expenses = props.expenseArray.filter((exp) => {
      const date = new Date(exp.date);

      //eslint-disable-next-line
      return date.getFullYear() == selectedYear;
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
