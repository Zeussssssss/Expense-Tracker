import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //ALTERNATE CODE THATS USED OBJECTS INSTEAD OF MULTIPLE STATES
  // const [data, setData] = useState({name: '', date: '', amount: ''})

  // const nameChangeHandler = (event) =>{
  //   setName((prevState) =>{
  //     return {...prevState, name: event.target.value};
  //   })
  // }

  const [enteredName, setName] = useState("");
  const [enteredDate, setDate] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredCategory, setCategory] = useState("E");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

  const createExpense = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredName,
      date: new Date(enteredDate),
      expense: +enteredAmount,
      category: enteredCategory,
    };

    //2-way binding so that the form gets reset after submission
    setAmount("");
    setDate("");
    setName("");
    console.log(props);
    props.onSaveExpense(expenseData);
  };
  return (
    <form onSubmit={createExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Expense Date </label>
          <input
            type="date"
            min="2020-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Expense Category</label>
          <select onChange={categoryChangeHandler}>
            <option value="E">Essentials</option>
            <option value="R">Recurring</option>
            <option value="I">Investments</option>
            <option value="ET">Entertainment</option>
            <option value="M">Miscellaneous</option>
          </select>
        </div>
      </div>
      <br />
      <div className="new-expense__actions">
        <button onClick={props.onCancel}> Cancel </button>
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
