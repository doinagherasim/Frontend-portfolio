import React from "react";
import classes from "./calculator.css";
import {useState} from "react";

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
  const [dotCounter, setDotCounter] = useState(0);
  const [prevValue, setPrevValue] = useState([]);
  const [minus, setMinus] =useState(false);
  const [valueLenght, setValueLenght] = useState(0);
  
    
    // 2. clickHndler for each digit
    const clickHandler = (digit) => {

    const operators = ["+", "-", "*", "/","%"];  // Array of operators

    if (operators.includes(prevOperator) && operators.includes(digit)) {
      setValue([...prevValue,digit]);
      setStoredValue(value);
        return;  // Do not allow the user to enter two or more operators one after another
      }
        else if ((operatorsTop.includes(digit) ||  operatorsRight.includes(digit) || digit === 0)
        && value.length === 0){
        setValue([]); // do not allow user to enter operators if there is no digits
       } 
       else if((digits.includes(digit) || digit === 0)){   
          setValue([...value, digit]); // return the digit value if it is a number
          setPrevOperator(digit);
          setStoredValue(value);}
       else if(operators.includes(digit)){
        if(digit === "-"){
        setMinus(true);
        setDotCounter(0);
        }
        if(digit === "+" || digit === "/" || digit === "*") {
          setMinus(false);
          setDotCounter(0);
        }
        setValue([...value, digit]);
        setPrevOperator(digit);
        setPrevValue([...value]);
        setStoredValue([...value]);
        return;
       }

    // DELETE button   
    if (digit === "DEL"){
      setValue(value.slice(0,-1));
      setStoredValue(value.slice(0,-1));
      setDotCounter(0);
    } 

     // CLEAR button
     if(digit === "C" && value.length > 0){
      window.location.reload();
     }

    // PLUS/MINUS operator 
    if (digit === "+/-") {
      const operatorsArray = ["+","*", "/","%"];
      const hasOperator = value.some(el => operatorsArray.includes(el));
      const lastOperatorIndex = value.slice().reverse().findIndex(el => operatorsArray.includes(el));
      const operatorIndex = value.length - lastOperatorIndex-1; // index of the operator
      const nextIndex = operatorIndex + 1; // next index after operator
      if(hasOperator) {
        if( (value[nextIndex] !== "-" && minus === false)) {
        value.splice(nextIndex,0,"-");
        setValue([...value]);
        setStoredValue(value);
        }
       else if(value[nextIndex] === "-" && minus === false){
        value.splice(nextIndex,1);
        setValue(value);
        setStoredValue(value);
      } else if(value[nextIndex] === "-" && minus === true) {
        return;
      }
      } 
      else if(!hasOperator) {
            if(value[0] !== "-") {
              setPrevValue(value);
              setValue(["-", ...value]);
              } else if (value[0] === "-"){
                setValue(prevValue);
              }          
      }
    }
    
     // DOT operator "."
    if (digit === ".") {
      let counter = dotCounter;
      counter++; // Increment the dot counter if the user clicks on the "." button
      setDotCounter(counter); 
      if(dotCounter === 0) {
        if(value.length === 0) {
          setValue([0,...value, digit]);
        } else {
          setValue([...value, digit]);
        }
        } else {
          return;
      }
    }
    
     // EQUAL button - "=" and Calculation
    if (digit === "=" && value.length >1) { 
      let operation = value.join("");
      const calcResult = math.evaluate(operation);
            setValue([calcResult]);  
            setStoredValue(operation); 
          if (digit === "=" && value.length === 0) {
            setValue([]);  // Do not allow the user to press "=" if there are no values in the array
          } 
          else if (digit === "=" && value.length === 1) {
            setValue(value);
            setStoredValue(value);
            return;
          }
        };
        console.log("vallen", valueLenght);
        if (value.length > 18){
          setValueLenght(18);
        } if (value.length > 32){
          setValueLenght(32);
        } if (value.length > 45)
          setValueLenght(45);
      };
   
   return (
        <div className="container">
            <div className="calculator_container">
                <div className="screen_container">
                    <p className={valueLenght < 18 
                    ? "stored screen2" : valueLenght >= 18 && valueLenght < 32 
                    ? "stored screen3" : valueLenght >= 32 && valueLenght < 42
                    ? "stored screen4" : "stored screen5"}>{storedValue}</p>
                    <p className={valueLenght < 18 
                    ? "screen screen1" : valueLenght >= 18 && valueLenght < 32
                    ? "screen screen2" : valueLenght >= 32 && valueLenght < 42
                    ? "screen screen3" : "screen screen4"
                  } >{value}</p></div>

                <div className="buttonBox buttonBoxTop">{
                    operatorsTop.map((element, index)=>
                    <button className={(element === "DEL" || element === "C") 
                    ? "button del" : "button btnGrey"} key={index} 
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
                    <button className={"button btnGrey"} key={index} 
                    onClick={()=> {clickHandler(element);}}>
                        <p className={element === "*" ? "asterisk" : "text"}>{element}</p></button>
                    )}
                  </div>
                </div>
            </div>
          );
};

export default Calculator;