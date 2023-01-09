import React from "react";
import classes from "./calculator.css";
import {useState} from "react";

function Calculator() {
    // 1. Declare state variables
    // Declare state variables to store the value and the previous operator
  const [value, setValue] = useState([]);
  const [prevOperator, setPrevOperator] = useState("");

    const operatorsTop = ["DEL","C", "+/-", "%"];
    const digits =[ 7, 8, 9, 4, 5, 6, 1, 2, 3];
    const operatorsRight = ["/","x","-","+"];
    const operatorsBottom = [0, ".","="];
    const [storedValue, setStoredValue] = useState([]);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState(null);
    const [dotCounter, setDotCounter] = useState(0);
    const [firstNumber, setFirstnumber] = useState(0);
  
    
    // 2. clickHndler for each digit
    const clickHandler = (digit) => {

    const operators = ["+", "-", "x", "/"];  // Array of operators

    if (operators.includes(prevOperator) && operators.includes(digit)) {
      console.log("1");
        return;  // Do not allow the user to enter two or more operators one after another
      } 
        else if (digit === "." && prevOperator === digit){
          console.log("2");
        return; // Do not allow the user to enter more than one "." digit 
      } 
        else if ((operatorsTop.includes(digit) ||  operatorsRight.includes(digit))
        && value.length === 0) 
       {
        console.log("3");
        setValue([]); // do not allow user to enter operators if there is no digits
       } else if (digit === 0 && value.length === 1) {
        console.log("4");
        return;
       } 
       else {
        console.log("6");
        setValue([...value, digit]);
        setFirstnumber(Number(value.join("")));
        setPrevOperator(digit);
        console.log("firstNr1", firstNumber);
       }

    // DELETE button   
    if (digit === "DEL" && value.length === 1) {
        setValue(value.slice(0,-1));
        setStoredValue([]);
     }  
     else if (digit === "DEL" && value.length > 1) {
        setValue(value.slice(0,-1));
     }  
     // CLEAR button
     else if(digit === "C") {
        setValue([]);
        setStoredValue([]);
     }  
     // PERCENT button - %
     else if(digit === "%" && value.length > 0) {
        const firstNr = Number(value.join(""));
        let result;
        result =firstNr/100;
        setValue([result]);  
        setStoredValue(firstNr+operator + "%");   
        setResult([result]);
     } 
     else if (operatorsTop.includes(digit) || operatorsRight.includes(digit)) {
        setOperator(digit);
     } 
     // EQUAL button - "=" and Calculation
    else if (digit === "=" && value.length >1) { 
      console.log("valueEqual", value);  
      console.log("first", firstNumber);
     
    // find the index of the used operator
            const index = value.indexOf(operator);
            const firstNr = Number(value.slice(0,index).join(""));
            const secondNr = Number(value.slice(index+1).join(""));
            // calculate the result
            console.log("fr", firstNr);
            console.log("sec", secondNr);

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
                console.log("result", result);
            }
            setValue([result]);  
            setStoredValue(firstNr+operator+secondNr + "=");   
            setResult([result]);
          } 
          else if (digit === "=" && value.length === 0) {
            setValue([]);  // Do not allow the user to press "=" if there are no values in the array
          } 
          else if (digit === "=" && value.length === 1) {
            setValue(value);
            setStoredValue(value);
          }
          
          // DOT "."
          // Increment the dot counter if the user clicks on the "." button
          if (digit === "." && dotCounter === 0) {
            let counter = dotCounter;
              counter++;
              setDotCounter(counter);
            
           } 
          // Do not allow the user to enter a "." if the dot counter is greater than 0
          else if (digit === "." && dotCounter > 0) {
          setValue([...value]);
        }  else if (operators.includes(digit)) {
          console.log("5");
          setDotCounter(0);
          setValue([...value, digit]);
         }

      if(digit === "+/-" && value !== 0) {
        if(value[0] === "-") {
          console.log("1");
          setValue([...value]);
        } else {
          console.log("2");
          setValue(["-", ...value]);
        }
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
                    <button className={"button btnGrey"} key={index} 
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

                  <div className="buttonBox buttonBoxBottom">{
                    operatorsBottom.map((element, index)=>
                    <button className={element === "=" ? "button equal" : "button"} key={index} 
                    onClick={()=> {clickHandler(element);}}>
                        <p className="text">{element}</p></button>
                    )}
                  </div>
                </div>
                <div className="buttonBox buttonBoxRight">{
                    operatorsRight.map((element, index)=>
                    <button className="button btnOrange" key={index} 
                    onClick={()=> {clickHandler(element);}}>
                        <p className="text">{element}</p></button>
                    )}
                  </div>
                </div>
            </div>
    );
};

export default Calculator;