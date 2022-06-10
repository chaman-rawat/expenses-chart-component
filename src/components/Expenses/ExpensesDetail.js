import classes from "./ExpenseDetail.module.css";

const ExpensesDetail = () => {
  return (
    <div className={`flex__hz ${classes.details}`}>
      <div className={classes.left}>
        <p>Total this month</p>
        <h2>$478.33</h2>
      </div>
      <div className={classes.right}>
        <h4>+2.4%</h4>
        <p>from last month</p>
      </div>
    </div>
  );
};

export default ExpensesDetail;
