import React from "react";
import classes from "./calculator.css";
import {useState} from "react";

function Calculator() {
    // 1. Declare state variables
    // Declare state variables to store the value and the previous operator
  const [value, setValue] = useState([]);
  const [prevOperator, setPrevOperator] = useState("");
    const operatorsTop = ["DEL","C", "%", "/"];
    const digits =[ 7, 8, 9, 4, 5, 6, 1, 2, 3];
    const operatorsRight = ["x","-","+"];
    const operatorsBottom = [0, ".","="];
    const [storedValue, setStoredValue] = useState([]);
    const [firstNumber, setFirstNumber] = useState([]);
    const [secondNumber, setSecondNumber] = useState([]);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState(null);
    
    // 2. clickHndler for each digit
    const clickHandler = (digit) => {

    const operators = ["+", "-", "x", "/"];  // Array of operators

    if (operators.includes(prevOperator) && operators.includes(digit)) {
        return;  // Do not allow the user to enter two or more operators one after another
      } 
        else if (digit === "." && prevOperator === digit){
        return; // Do not allow the user to enter more than one "." on a digit
      }
        else if ((operatorsTop.includes(digit) || operatorsRight.includes(digit))
        && value.length === 0) 
       {
        console.log("2");
        setValue([]); // do not allow user to enter operators if there is no digits
       } else if (digit === 0 && value.length === 1) {
      return;
       }
       else {
        console.log("3");
        setValue([...value, digit]);
        setPrevOperator(digit);
        console.log("digit", digit);
       }  

    if (digit === "DEL" && value.length === 1) {
        setValue(value.slice(0,-1));
        setStoredValue([]);
     }  else if (digit === "DEL" && value.length > 1) {
        setValue(value.slice(0,-1));
     }  else if(digit === "C") {
        setValue([]);
        setStoredValue([]);
     }  else if(digit === "%" && value.length > 0) {
        console.log("4");
        const firstNr = Number(value.join(""));
        let result;
        result =firstNr/100;
        setValue([result]);  
        setStoredValue(firstNr+operator + "%");   
        setResult([result]);
     } else if (operatorsTop.includes(digit) || operatorsRight.includes(digit)) {
        setOperator(digit);
     } else if (digit === "=" && value.length >1) {
        console.log("6");
        console.log("value", value);    
    // find the index of the used operator => [2,3,4,"/",4,5]
            const index = value.indexOf(operator);
            console.log("index", value.indexOf(operator));
            const firstNr = Number(value.slice(0,index).join(""));
            const secondNr = Number(value.slice(index+1).join(""));
            setSecondNumber(secondNr);
            console.log("fr", firstNr);
            console.log("sec", secondNr);
            // calculate the result
            let result;
            switch (operator) {
              case "+": 
                result = firstNr + secondNr;
                break;
              case "-":
                result = firstNr - secondNr;
                break;
              case "/":
                result = firstNr / secondNr;
                break;
              case "x":
                result = firstNr * secondNr;
                break;    
              case "%":
                result = firstNr / 100;
                break;     
              default:
                result = NaN;
            }
            setValue([result]);  
            setStoredValue(firstNr+operator+secondNr + "=");   
            setResult([result]);
          } else if (digit === "=" && value.length === 0) {
            console.log("7");
            setValue([]);  // Do not allow the user to press "=" if there are no values in the array
          } else if (digit === "=" && value.length === 1) {
            console.log("8");
            setValue(value);
            setStoredValue(value);
          }
     };

      
    
   return (
        <div className="container">
            <div className="calculator_container">
                <div className="screen_container">
                    <p className="displayDigit">{storedValue}</p>
                    <p className="screen">{value}</p></div>

                <div className="buttonBox buttonBoxTop">{
                    operatorsTop.map((element, index)=>
                    <button className={element === "/" ? "button btnOrange" : "button btnGrey"} key={index} 
                    onClick={()=>{clickHandler(element);}}>
                        <p className="text">{element}</p></button>
                    )}
                </div>
                <div className="container2">
                <div className="buttonBox buttonBoxDigits">{
                    digits.map((element, index)=>
                    <button className="button" key={index} onClick={()=> {clickHandler(element);}}>
                        <p className="text">{element}</p></button>)}   
                </div>

                <div className="buttonBox buttonBoxRight">{
                    operatorsRight.map((element, index)=>
                    <button className="button btnOrange" key={index} 
                    onClick={()=> {clickHandler(element);}}>
                        <p className="text">{element}</p></button>
                    )}
                </div>

                <div className="buttonBox buttonBoxBottom">{
                    operatorsBottom.map((element, index)=>
                    <button className={element === "=" ? "button equal" : "button"} key={index} 
                    onClick={()=> {clickHandler(element);}}>
                        <p className="text">{element}</p></button>
                    )}
                </div>
                </div>
                </div>
            </div>
    );
};

export default Calculator;