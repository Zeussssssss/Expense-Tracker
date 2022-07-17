import "./ExpenseList.css";

const ExpenseList = (props) => {
  let lst = props.expenseList;
  if (props.expenseList.length === 0) {
    lst = (
      <p className="expenses-list__fallback">
        No Expenses to show! Start Spending!!
      </p>
    );
  }
  return (
    <ul className="expenses-list">
      <li>{lst}</li>
    </ul>
  );
};

export default ExpenseList;
