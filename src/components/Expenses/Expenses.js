import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(2022);

  const onYearSelectHandler = (yearOption) => {
    setSelectedYear(yearOption);
  };

  const expenses = props.expenseArray
    .filter((exp) => {
      return exp.date.getFullYear() === selectedYear;
    })
    .map((exp) => (
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
      <ExpenseChart
        expenseArray={props.expenseArray.filter((exp) => {
          return exp.date.getFullYear() === selectedYear;
        })}
      />
      <ExpenseList expenseList={expenses} />
    </Card>
  );
};

export default Expenses;
