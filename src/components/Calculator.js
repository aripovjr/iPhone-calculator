import React, { useState } from "react";
import ButtonHolder from "./ButtonHolder";
import ResultHolder from "./ResultHolder";

function Calculator() {
  const [childValue, setChildValue] = useState();
  const [result, setResult] = useState();

  const getValue = (dataFromChild) => {
    setChildValue(dataFromChild);
  };
  const gotResult = (resultFromChild) => {
    setResult(resultFromChild);
  };

  return (
    <div className="calculator">
      <ResultHolder calcValue={childValue} result={result} />
      <ButtonHolder onGet={getValue} onResult={gotResult} />
    </div>
  );
}

export default Calculator;
