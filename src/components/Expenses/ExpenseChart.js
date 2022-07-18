import Chart from "../Chart/Chart";
const ExpenseChart = (props) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  console.log(props.expenseArray.length);
  for (const exp of props.expenseArray) {
    const date = new Date(exp.date);
    const month = date.getMonth();
    chartData[month].value += exp.expense;
  }
  return <Chart dataCollection={chartData} />;
};

export default ExpenseChart;
