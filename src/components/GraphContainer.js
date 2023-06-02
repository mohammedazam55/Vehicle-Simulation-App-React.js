import React from "react";
import { Chart } from "react-google-charts";

const GraphContainer = () => {
  return (
    <Chart
      chartType="ScatterChart"
      data={[
        ["X", "Y"],
        [10, 0],
        [0, 0],
      ]}
      options={{
        backgroundColor: "black",
        chartArea: {
          backgroundColor: "black",
          width: "100%",
          height: "100%",
        },
        hAxis: {
          title: "X",
          titleTextStyle: { color: "green" },
          gridlines: { color: "green" },
          baselineColor: "green",
        },
        vAxis: {
          title: "Y",
          titleTextStyle: { color: "green" },
          gridlines: { color: "green" },
          baselineColor: "green",
        },
        legend: { textStyle: { color: "green" } },
      }}
      width="100%"
      height="350px"
      legendToggle
    />
  );
};

export default GraphContainer;
