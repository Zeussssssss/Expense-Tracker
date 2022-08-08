// import { PromiseProvider } from "mongoose";
import React from "react";

import "./css/ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const onSelectHandler = (event) => {
    props.onYearSelect(+event.target.value);
  };

  const yearsToBeDisplayed = props.yearArray.sort().map((year) => {
    return <option value={year}>{year}</option>;
  });

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onSelectHandler}>
          <option value="1111"></option>
          {yearsToBeDisplayed}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
