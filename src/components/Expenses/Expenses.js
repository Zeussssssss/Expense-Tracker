import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React from "react";

const Expenses = (props) => {
  const expenses = props.expenseArray;
  return (
    <Card className="expenses">
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
