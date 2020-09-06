import * as React from "react";
import * as Highcharts from "highcharts/highstock";

type ChartData = number[][];

interface ChartProps {
  data: ChartData;
}

const Chart = (props: ChartProps) => {
  if (props.data.length > 0) {
    Highcharts.stockChart("stock-chart", {
      rangeSelector: {
        selected: 1,
      },
      title: {
        text: "AAPL Stock Price",
      },

      series: [
        {
          type: "ohlc",
          name: "AAPL",
          data: props.data,
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],
    });
  }
  return (
    <div className="chart-container">
      <div id="stock-chart" />
    </div>
  );
};

export default Chart;
