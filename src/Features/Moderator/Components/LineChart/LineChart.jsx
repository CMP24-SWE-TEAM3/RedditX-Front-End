import React from "react";
import { Chart } from "./LineChart.styled";

/**
 * Component that displays chart with datasets of members
 * @returns {React.Component}
 */
const LineChart = () => {
  return (
    <Chart
      type="line"
      data={{
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Chart",
            backgroundColor: "rgba(151, 187, 205, 0.2)",
            borderColor: "rgba(151, 187, 205, 1)",
            pointBackgroundColor: "rgba(151, 187, 205, 1)",
            pointBorderColor: "#fff",
            data: [1, 0.1, 0.3, 0.7, 0.45, 0.1, 0.12, 0.9, 0.6],
          },
        ],
        // className: {
        //   width: "940px",
        //   height: "300px",
        // },
      }}
    ></Chart>
  );
};

export default LineChart;
