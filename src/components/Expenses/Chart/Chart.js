import ChartBar from "./ChartBar";
import classes from './Chart.module.css';

const Chart = (props) => {
  const dataPointValues = props.data.map((dataPoint) => dataPoint.amount);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className={`flex__hz ${classes.chart}`}>
      {props.data.map((dataPoint) => (
        <ChartBar
          key={dataPoint.day}
          value={dataPoint.amount}
          maxValue={totalMaximum}
          label={dataPoint.day}
        />
      ))}
    </div>
  );
};

export default Chart;
