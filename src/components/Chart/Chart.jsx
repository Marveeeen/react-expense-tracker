import React from "react";

import ChartBar from "./ChartBar";

import styles from "./Chart.module.css";

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
