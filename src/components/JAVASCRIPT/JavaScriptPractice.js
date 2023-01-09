import {React, useState} from "react";

function JavaScriptPractice () {
  // Declare state variables to store the value and the previous operator
  const [value, setValue] = useState("");
  const [prevOperator, setPrevOperator] = useState("");

  // Declare the clickHandler function
  function clickHandler(digit) {
    const operators = ["+", "-", "x", "/", "="];  // Array of operators
    if (!operators.includes(prevOperator) || !operators.includes(digit)) {
      setValue(value + digit);
      setPrevOperator(digit);  // Store the operator as the previous operator
    }
  }
  
   
    return (
      <div>
         <div>{value}</div>
      <button onClick={() => clickHandler("+")}>+</button>
      <button onClick={() => clickHandler("-")}>-</button>
      <button onClick={() => clickHandler("x")}>x</button>
      <button onClick={() => clickHandler("/")}>/</button>
      <button onClick={() => clickHandler("=")}>=</button>
      <button onClick={() => clickHandler(1)}>1</button>
      <button onClick={() => clickHandler(2)}>2</button>
      <button onClick={() => clickHandler(3)}>3</button>
    </div>
    );
};

export default JavaScriptPractice;