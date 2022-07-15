import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const toggleDisplay = () => {
    setDisplayForm((prevState) => {
      return !prevState;
    });
  };

  let displayContents = (
    <ExpenseForm
      onSaveExpense={props.onSaveExpense}
      onCancel={toggleDisplay}
    ></ExpenseForm>
  );

  if (!displayForm) {
    displayContents = <button onClick={toggleDisplay}> Add New Expense</button>;
  }

  return <Card className="new-expense">{displayContents}</Card>;
};

export default NewExpense;
