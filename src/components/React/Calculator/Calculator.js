import React from "react";
import classes from "./calculator.css";
import {useState} from "react";
import math from "mathjs";

function Calculator() {
  const math = require("mathjs");
    // 1. Declare state variables
    // Declare state variables to store the value and the previous operator
  const [value, setValue] = useState([]);
  const [prevOperator, setPrevOperator] = useState("");

    const operatorsTop = ["DEL","C", "+/-", "%"];
    const digits =[ 7, 8, 9, 4, 5, 6, 1, 2, 3];
    const operatorsRight = ["/","*","-","+"];
    const operatorsBottom = [0, ".","="];
    const [storedValue, setStoredValue] = useState([]);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState(null);
    const [dotCounter, setDotCounter] = useState(0);
    const [firstNumber, setFirstnumber] = useState(0);
    const [prevAnswer, setPrevAnswer] = useState([]);
  
    
    // 2. clickHndler for each digit
    const clickHandler = (digit) => {

    const operators = ["+", "-", "x", "/","%"];  // Array of operators

    if (operators.includes(prevOperator) && operators.includes(digit)) {
      console.log("1");
      console.log("prev1", prevAnswer);
      setValue([...prevAnswer,digit]);
        return;  // Do not allow the user to enter two or more operators one after another
      } 
      //   else if (digit === "." && prevOperator === digit){
      //     console.log("2");
      //   return; // Do not allow the user to enter more than one "." digit 
      // } 
        else if ((operatorsTop.includes(digit) ||  operatorsRight.includes(digit))
        && value.length === 0) 
       {
        console.log("3");
        console.log("va-3", value);
        setValue([]); // do not allow user to enter operators if there is no digits
       } else if (digit === 0 && value.length === 1) {
        console.log("4");
        return; // do not allow to write 00000 at the bigining
       } 
       else if(digit !== "DEL" && digit !== "C" && digit !== "+/-" && digit !== "=" && digit !== "." && !operators.includes(digit)){
        console.log("5");
        setValue([...value, digit]);
        // setFirstnumber(Number(value.join("")));
        setPrevOperator(digit);
        console.log("value5", value);
        console.log("prev5", prevAnswer);
        
       } 
       else if(operators.includes(digit)){
        console.log("6");
        setValue([...value, digit]);
        setFirstnumber(Number(value.join("")));
        setPrevOperator(digit);
        setPrevAnswer([...value]);
        setStoredValue([...value]);
        setOperator(digit);
        console.log("value6", value);
        console.log("prev6", prevAnswer);
        return;
       }

    // DELETE button   
    if (digit === "DEL"){
      if(value.length === 1) {
      console.log("6-DEL");
        setValue(value.slice(0,-1));
        setStoredValue([]); // return empty if there is only one digit
     }  
     else if (value.length > 1) {
      console.log("7-DEL");
        setValue(value.slice(0,-1)); // delete the digits one by one
     } 
    } 
     // CLEAR button
     else if(digit === "C" && value.length > 0) {
      console.log("8-C");
        setValue([]);
        setStoredValue([]); // clear the value && answear
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
     // DOT operator "."
          // Increment the dot counter if the user clicks on the "." button
    if (digit === ".") {
      console.log("12 .");
      let counter = dotCounter;
          counter++;
          setDotCounter(counter); // start to count the dots
          console.log("dots", dotCounter);         
          // Do not allow the user to enter a "." if the dot counter is greater than 0
          if(dotCounter === 0){
            console.log("13-.");
            setValue([...value, digit]);
            console.log("val13", value);
            console.log("prev13", prevAnswer);
          }
          else if (dotCounter > 0 && prevAnswer.includes(".")) {
            console.log("14-.");
            console.log("prev14", prevAnswer);
            console.log("include ., new caracter");
          setValue([...value,digit]);
          console.log("val14", value);
        }  
      } 
     // PERCENT button - %
    //   if(digit === "%" && value.length > 0) {
    //     console.log("12-%");
    //     console.log("val-%", value);
    //     const firstNr = Number(value.join(""));
    //     let result;
    //     result =firstNr/100;
    //     setValue([result]);  
    //     setStoredValue(firstNr+operator + "%");   
    //     setResult([result]);
    //  } 
     // EQUAL button - "=" and Calculation
    if (digit === "=" && value.length >1) { 
      console.log("16-=");
      // let newValue = value.find("X");
      let operation = value.join("");
      const result = math.evaluate(operation);
            setValue([result]);  
            setStoredValue(operation);   
            setResult([result]);
          } 
          else if (digit === "=" && value.length === 0) {
            console.log("17-=");
            setValue([]);  // Do not allow the user to press "=" if there are no values in the array
          } 
          else if (digit === "=" && value.length === 1) {
            console.log("18-=");
            setValue(value);
            setStoredValue(value);
            return;
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