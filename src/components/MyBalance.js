import classes from "./MyBalance.module.css";

const MyBalance = () => {
  return (
    <div className={`container flex__hz ${classes.mybalance}`}>
      <div>
        <p>My balance</p>
        <h2>$921.48</h2>
      </div>
      <img src="logo.svg" alt="Logo" />
    </div>
  );
};

export default MyBalance;