import { useState } from "react";
import classes from "./ChartBar.module.css";

const ChartBar = (props) => {
  const [isPopupVisibile, setIsPopupVisible] = useState(false);

  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  const onMouseEnterHandler = () => {
    setIsPopupVisible(true);
  };

  const onMouseLeaveHandler = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={classes.bar}>
      <div className={classes.bar__inner}>
        <div
          className={`${
            props.maxValue === props.value
              ? classes.bar__fill__max
              : classes.bar__fill
          }

          ${
            isPopupVisibile &&
            (props.maxValue === props.value
              ? classes.bar__show__max
              : classes.bar__show)
          }`}
          popup={`$${props.value}`}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          style={{
            height: barFillHeight,
          }}
        ></div>
      </div>
      <div className={classes.bar__label}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
