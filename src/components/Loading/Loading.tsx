import * as React from "react";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loader">
      {[...Array(5)].map((v, i) => (
        <div key={i} className={`loader-bar loader-bar--${i}`} />
      ))}
    </div>
  );
};

export default Loading;
