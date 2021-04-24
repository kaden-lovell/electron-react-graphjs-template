import React, { Component } from "react";
import Chart from "chart.js/auto";
import Theme from '../theme';

// import classes from "./LineGraph.module.css";

export default class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    const colors = this.randomizeColors(5);
    const chartParams = {
      type: "pie",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March"],
        datasets: [
          {
            label: "Sales",
            data: [86, 67, 91],
            backgroundColor: colors,
          },
        ],
      },
      options: {
        //Customize chart options
      },
    };

    new Chart(myChartRef, chartParams);
  }

randomizeColors(count) {
  const colors = [Theme.colors.red[600], Theme.colors.blue[600], Theme.colors.green[600], Theme.colors.yellow[600]];
  const result = [];
  for(var i = 0; i <= count; i++) {
    result.push(colors[Math.floor(Math.random() * colors.length)]);
  }
  return result;
}

  render() {
    return (
      <div className="LineGraph_graphContainer__2g04_">
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
