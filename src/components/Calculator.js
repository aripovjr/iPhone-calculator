import React from "react";
import ButtonHolder from "./ButtonHolder";
import ResultHolder from "./ResultHolder";

function Calculator() {
  return (
    <div className="calculator">
      <ResultHolder />
      <ButtonHolder />
    </div>
  );
}

export default Calculator;
