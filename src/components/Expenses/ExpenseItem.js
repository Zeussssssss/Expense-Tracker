import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.item}</h2>
        <div className="expense-item__price">${props.expense}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
