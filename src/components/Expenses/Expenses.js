import Chart from "./Chart/Chart";
import ExpensesDetail from "./ExpensesDetail";

import classes from "./Expenses.module.css";

const Expenses = (props) => {
  return (
    <div className={`container ${classes.Expenses}`}>
      <h2>Spending - Last 7 days</h2>
      <Chart data={props.data} />
      <hr />
      <ExpensesDetail />
    </div>
  );
};

export default Expenses;
