import React from "react";

import styles from "./ChartBar.module.css";

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div
          style={{ height: barFillHeight }}
          className={styles["chart-bar__fill"]}
        ></div>
      </div>
      <div className={styles["chart-bar__label"]}>{label}</div>
    </div>
  );
};

export default ChartBar;
