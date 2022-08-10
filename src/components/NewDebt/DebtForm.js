import React, { useRef } from "react";
import "./css/DebtForm.css";

//THIS FORM USES REFS
const DebtForm = (props) => {
  const enteredNameRef = useRef();
  const enteredAmountRef = useRef();
  const enteredInterestRef = useRef();
  const enteredDeadlineRef = useRef();

  const createDebt = (event) => {
    event.preventDefault();

    const debtData = {
      name: enteredNameRef.current.value,
      amount: +enteredAmountRef.current.value,
      interest: +enteredInterestRef.current.value,
      deadline: new Date(enteredDeadlineRef.current.value),
    };

    enteredNameRef.current.value = "";
    enteredAmountRef.current.value = "";
    enteredInterestRef.current.value = "";
    enteredDeadlineRef.current.value = "";
    props.onSaveDebt(debtData);
  };

  return (
    <form onSubmit={createDebt}>
      <div className="new-debt__controls">
        <div className="new-debt__control">
          <label>Enter Debit/Credit/Loan Name</label>
          <input type="text" ref={enteredNameRef} required></input>
        </div>
        <div className="new-debt__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            ref={enteredAmountRef}
            required
          ></input>
        </div>
        <div className="new-debt__control">
          <label>APR/Interest (in %)</label>
          <input
            type="number"
            min="0.00"
            step="0.01"
            ref={enteredInterestRef}
            required
          ></input>
        </div>
        <div className="new-debt__control">
          <label>Deadline</label>
          <input type="date" ref={enteredDeadlineRef} required></input>
        </div>
      </div>
      <div className="new-debt__actions">
        <button onClick={props.onCancel}> Cancel </button>
        <button type="submit"> Add Debt </button>
      </div>
    </form>
  );
};

export default DebtForm;
