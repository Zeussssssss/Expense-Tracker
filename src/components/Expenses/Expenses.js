import ExpenseItem from "./ExpenseItem";
import "./css/Expenses.css";
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
    expenses = props.expenseArray.filter((exp) => {
      const date = new Date(exp.date);
      //eslint-disable-next-line
      return date.getFullYear() == selectedYear;
    });
  }

  let essentialExpenses = [
    <p>Essentials</p>,
    ...expenses
      .filter((exp) => {
        return exp.category === "E";
      })
      .map((exp) => (
        <ExpenseItem
          key={exp.id}
          item={exp.title}
          date={exp.date}
          expense={exp.expense}
        />
      )),
  ];

  console.log(essentialExpenses);
  if (essentialExpenses.length === 1) {
    essentialExpenses = [];
  }

  let recurringExpenses = [
    <p>Recurring</p>,
    ...expenses
      .filter((exp) => {
        return exp.category === "R";
      })
      .map((exp) => (
        <ExpenseItem
          key={exp.id}
          item={exp.title}
          date={exp.date}
          expense={exp.expense}
        />
      )),
  ];
  if (recurringExpenses.length === 1) {
    recurringExpenses = [];
  }

  let investmentExpenses = [
    <p>Investments</p>,
    ...expenses
      .filter((exp) => {
        return exp.category === "I";
      })
      .map((exp) => (
        <ExpenseItem
          key={exp.id}
          item={exp.title}
          date={exp.date}
          expense={exp.expense}
        />
      )),
  ];
  if (investmentExpenses.length === 1) {
    investmentExpenses = [];
  }

  let entertainmentExpenses = [
    <p>Entertainment</p>,
    ...expenses
      .filter((exp) => {
        return exp.category === "ET";
      })
      .map((exp) => (
        <ExpenseItem
          key={exp.id}
          item={exp.title}
          date={exp.date}
          expense={exp.expense}
        />
      )),
  ];
  if (entertainmentExpenses.length === 1) {
    entertainmentExpenses = [];
  }

  let miscExpenses = [
    <p>Miscellaneous</p>,
    ...expenses
      .filter((exp) => {
        return exp.category === "M";
      })
      .map((exp) => (
        <ExpenseItem
          key={exp.id}
          item={exp.title}
          date={exp.date}
          expense={exp.expense}
        />
      )),
  ];
  if (miscExpenses.length === 1) {
    miscExpenses = [];
  }

  const expenseList = [
    ...essentialExpenses,
    ...recurringExpenses,
    ...investmentExpenses,
    ...entertainmentExpenses,
    ...miscExpenses,
  ];

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearSelect={onYearSelectHandler}
        yearArray={props.yearArray}
      ></ExpensesFilter>
      <ExpenseChart expenseArray={expenses} />
      <ExpenseList expenseList={expenseList} />
    </Card>
  );
};

export default Expenses;
