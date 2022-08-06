import React from "react";
import "./css/ExpenseDate.css";
const ExpenseDate = (props) => {
  const fullDate = new Date(props.date);
  const date = fullDate.toLocaleString("en-us", { day: "2-digit" });
  const month = fullDate.toLocaleString("en-us", { month: "long" });
  const year = fullDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{date}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );

  //OLD REACT CODE

  // return React.createElement(
  //   "div",
  //   { className: "expense-date" },
  //   React.createElement(
  //     "div",
  //     { className: "expense-date__month" },
  //     month,
  //     React.createElement(
  //       "div",
  //       { className: "expense-date__day" },
  //       date,
  //       React.createElement("div", { className: "expense-date__year" }, year)
  //     )
  //   )
  // );
};

export default ExpenseDate;
