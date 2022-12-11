import React from "react";
import { Chart, LineContainer } from "./LineChart.styled";

/**
 * Component that displays chart with datasets of members
 * @returns {React.Component}
 */
const LineChart = () => {
  const data = () => {
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          backgroundColor: "rgba(151, 187, 205, 0.2)",
          borderColor: "rgba(151, 187, 205, 1)",
          pointBackgroundColor: "rgba(151, 187, 205, 1)",
          pointBorderColor: `${({ theme }) => theme.categoryColor.text}`,
          data: [1, 0.1, 0.3, 0.7, 0.45, 0.1, 0.12, 0.9, 0.6],
        },
      ],
    };
  };

  return (
    <LineContainer>
      <Chart
        data={data()}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        type="line"
      ></Chart>
    </LineContainer>
  );
};

export default LineChart;
