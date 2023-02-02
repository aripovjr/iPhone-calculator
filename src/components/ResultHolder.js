import React from "react";

function ResultHolder(props) {
  return (
    <div className="result-holder">
      <h1>{props.calcValue || "0"}</h1>
    </div>
  );
}

export default ResultHolder;
