import * as React from "react";
import * as Highcharts from "highcharts/highstock";

const Chart = (props: any) => {
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
          type: undefined,
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
