import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpense={props.onSaveExpense}></ExpenseForm>
    </Card>
  );
};

export default NewExpense;
