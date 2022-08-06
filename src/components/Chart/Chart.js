import "./css/Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valArray = props.dataCollection.map((data) => {
    return data.value;
  });
  const maxVal = Math.max(...valArray);
  return (
    <div className="chart">
      {props.dataCollection.map((data) => {
        return (
          <ChartBar
            key={data.label}
            height={data.value}
            maxHeight={maxVal}
            label={data.label}
          />
        );
      })}
    </div>
  );
};
export default Chart;
