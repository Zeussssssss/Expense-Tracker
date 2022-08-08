import React, { useState } from "react";
import Card from "../UI/Card";
import "./css/NewDebt.css";
import DebtForm from "./DebtForm";

const NewDebt = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const toggleDisplay = () => {
    setDisplayForm((prevState) => {
      return !prevState;
    });
  };

  let displayContents = (
    <DebtForm onSaveDebt={props.onSaveDebt} onCancel={toggleDisplay}></DebtForm>
  );

  if (!displayForm) {
    displayContents = <button onClick={toggleDisplay}>Add New Debt</button>;
  }

  return <Card className="new-debt">{displayContents}</Card>;
};

export default NewDebt;
