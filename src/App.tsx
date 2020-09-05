import * as React from "react";
import Chart from "./components/Chart/Chart";
import "./scss/App.scss";

const url = "https://demo-live-data.highcharts.com/aapl-c.json";

const App = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setData(result);
        },
        () => {
          setLoaded(true);
          setError(true);
        }
      );
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  if (loaded && error) {
    return <p>Error loading data!</p>;
  }

  return <Chart data={data} />;
};

export default App;
