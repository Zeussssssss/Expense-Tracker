// import { PromiseProvider } from "mongoose";
import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const onSelectHandler = (event) => {
    props.onYearSelect(+event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onSelectHandler}>
          <option value="1111"></option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
