import * as React from "react";
import Chart from "./components/Chart/Chart";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import "./scss/App.scss";

const url = "http://localhost:8000/data";

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
    return <Loading />;
  }

  if (loaded && error) {
    return <Error />;
  }

  return <Chart data={data} />;
};

export default App;
