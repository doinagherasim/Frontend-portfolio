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
    const [prevAnswer, setPrevAnswer] = useState(0);
  
    
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
        console.log("va-3", value);
        setValue([]); // do not allow user to enter operators if there is no digits
       } else if (digit === 0 && value.length === 1) {
        console.log("4");
        return;
       } 
       else if(digit !== "DEL" && digit !== "C" && digit !== "+/-"){
        console.log("5");
        setValue([...value, digit]);
        setFirstnumber(Number(value.join("")));
        setPrevOperator(digit);
        console.log("value5", value);
        return;
       }

    // DELETE button   
    if (digit === "DEL"){
      if(value.length === 1) {
      console.log("6-DEL");
        setValue(value.slice(0,-1));
        setStoredValue([]);
     }  
     else if (value.length > 1) {
      console.log("7-DEL");
        setValue(value.slice(0,-1));
     } 
    } 
     // CLEAR button
     else if(digit === "C" && value.length > 0) {
      console.log("8-C");
        setValue([]);
        setStoredValue([]);
     }  
    // PLUS/MINUS operator
     if(digit === "+/-") {
      console.log("9-+/-");
      if(value.length > 0 && value[0] !== "-"){
        console.log("10-+/-");
        setValue(["-", ...value]);
        setPrevAnswer(value);
      }
      else if(value[0] === "-") {
        console.log("11-+/-");
        setValue([...prevAnswer]);
        console.log("value", value);
      }
    }
     // PERCENT button - %
      if(digit === "%" && value.length > 0 && value === Number) {
        console.log("12-%");
        const firstNr = Number(value.join(""));
        let result;
        result =firstNr/100;
        setValue([result]);  
        setStoredValue(firstNr+operator + "%");   
        setResult([result]);
     } 
    //  else if (operatorsTop.includes(digit) || operatorsRight.includes(digit)) {
    //   console.log("10-%");
    //   setOperator(digit);
    //  } 
     // EQUAL button - "=" and Calculation
     if (digit === "=" && value.length >1) { 
      console.log("13-=");
    // find the index of the used operator
            const index = value.indexOf(operator);
            const firstNr = Number(value.slice(0,index).join(""));
            const secondNr = Number(value.slice(index+1).join(""));
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
          } 
          else if (digit === "=" && value.length === 0) {
            console.log("14-=");
            setValue([]);  // Do not allow the user to press "=" if there are no values in the array
          } 
          else if (digit === "=" && value.length === 1) {
            console.log("15-=");
            setValue(value);
            setStoredValue(value);
            return;
          }
          
          // DOT "."
          // Increment the dot counter if the user clicks on the "." button
          if (digit === "." && dotCounter === 0) {
            console.log("16-.");
            let counter = dotCounter;
              counter++;
              setDotCounter(counter);
            
           } 
          // Do not allow the user to enter a "." if the dot counter is greater than 0
           if (digit === "." && dotCounter > 0) {
            console.log("17-.");
          setValue([...value]);
        }  else if (operators.includes(digit)) {
          console.log("18-.");
          setDotCounter(0);
          setValue([...value, digit]);
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