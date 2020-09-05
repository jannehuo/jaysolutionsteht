import * as React from "react";
import * as Highcharts from "highcharts/highstock";

const url = "https://demo-live-data.highcharts.com/aapl-c.json";

const Chart = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          setLoaded(true);
          createChart(result);
        },
        (error) => {
          setLoaded(true);
          setError(true);
        }
      );
  }, []);

  const createChart = (data: object) => {
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
          data: data,
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],
    });
  };

  if (!loaded) {
    return <p>Loading...</p>;
  }

  if (loaded && error) {
    return <p>Error loading data!</p>;
  }

  return (
    <div className="chart-container">
      <div id="stock-chart" />
    </div>
  );
};

export default Chart;
