import {React, useState} from "react";

function JavaScriptPractice () {
  function calculate(arr) {
    let result = arr[0];  // Initialize result with the first element in the array
    let currentOperator = null;  // Keep track of the current operator
  
    // Loop through the array, starting at the second element
    for (let i = 1; i < arr.length; i++) {
      const element = arr[i];
      if (typeof element === "number") {
        if (currentOperator === "x" || currentOperator === "/") {
          if (currentOperator === "x") {
            result *= element;
          } else {
            result /= element;
          }
          currentOperator = null;
        } else {
          result = element;
        }
      } else {  // If the element is not a number, it must be an operator
        currentOperator = element;  // Update the current operator
      }
      if (currentOperator === "+" || currentOperator === "-") {
        if (currentOperator === "+") {
          result += element;
        } else {
          result -= element;
        }
        currentOperator = null;
      }
    }
    return result;
  }
  
  console.log(calculate([7, "x", 8, "+", 5, "/", 3]));
  
  return (
    <div >
    </div >
  );


}

export default JavaScriptPractice;