import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  const date = props.date.toLocaleString("en-us", { day: "2-digit" });
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear();
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
}

export default ExpenseDate;
