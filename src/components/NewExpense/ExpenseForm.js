import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Name</label>
          <input type="text"></input>
        </div>
        <div className="new-expense__control">
          <label>Expense Date </label>
          <input type="date" min="2020-01-01"></input>
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input type="number" min="0.01" step="0.10"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add! </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
