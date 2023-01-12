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
    const [dotCounter, setDotCounter] = useState(0);
    const [prevValue, setPrevValue] = useState([]);
    const [minus, setMinus] =useState(false);;
    // const [index, setIndex] = useState(null);
  
    
    // 2. clickHndler for each digit
    const clickHandler = (digit) => {

    const operators = ["+", "-", "*", "/","%"];  // Array of operators

    if (operators.includes(prevOperator) && operators.includes(digit)) {
      setValue([...prevValue,digit]);
        return;  // Do not allow the user to enter two or more operators one after another
      } 
        else if ((operatorsTop.includes(digit) ||  operatorsRight.includes(digit))
        && value.length === 0){
        console.log("3");
        setValue([]); // do not allow user to enter operators if there is no digits
       } 
       else if (digit === 0 && value.length === 1) {
        return; // do not allow to write 00000 at the bigining
       } 
       else if(digits.includes(digit)){
        console.log("5");
        setValue([...value, digit]); // return the digit value if it is a number
        setPrevOperator(digit);
       } 
       else if(operators.includes(digit)){
        console.log("6");
        if(digit === "-"){
        setMinus(true);
        }
        setValue([...value, digit]);
        setPrevOperator(digit);
        setPrevValue([...value]);
        setStoredValue([...value]);
        console.log("minus6", minus);
        return;
       }

    // DELETE button   
    if (digit === "DEL"){
      setValue(value.slice(0,-1));
    } 

     // CLEAR button
     if(digit === "C" && value.length > 0) {
        setValue([]);
        setStoredValue([]); // clear the value && answear
     }  

    // PLUS/MINUS operator 
    if (digit === "+/-") {
      const operatorsArray = ["+","*", "/","%"];
      const hasOperator = value.some(el => operatorsArray.includes(el));
      const lastOperatorIndex = value.slice().reverse().findIndex(el => operatorsArray.includes(el));
      const operatorIndex = value.length - lastOperatorIndex-1; // index of the operator
      const nextIndex = operatorIndex + 1; // next index after operator
      const minusOperator= value.slice().reverse().findIndex(el => el === "-");
      const minusOperatorIndex = value.length - minusOperator-1; // index of the minus operator
      const nextMinusOperatorindex = minusOperatorIndex +1;
      if(hasOperator) {
        if( (value[nextIndex] !== "-")) {
        console.log("7");
        value.splice(nextIndex,0,"-");
        setValue([...value]);
        setStoredValue(value);
        console.log("minus7", minus);
        }
       else if(value[nextIndex] === "-" && minus === false){
        console.log("8");
        value.splice(nextIndex,1);
        setValue(value);
        setStoredValue(value);
        console.log("minus8", minus);
      } 
      else if(value[nextIndex] === "-" && minus === true && 
      value[minusOperatorIndex] === "-" && value[nextMinusOperatorindex] === "-"){
        console.log("9");
        setPrevValue(value);
        value.splice(minusOperatorIndex,0,"-");
        setValue([...value]);
        setStoredValue(value);
        console.log("minus9", minus);
        console.log("value9", value);
        console.log("minusoperindex9",value[minusOperatorIndex]);
        console.log("minusoperindex9",minusOperatorIndex);
        console.log("minus-next", value[nextMinusOperatorindex]);
        console.log("minus-next", nextMinusOperatorindex);
        console.log("value[nextIndex]", value[nextIndex]);
        console.log("value[nextIndex]", nextIndex);

      } else if(value[nextIndex] === "-" && minus === true && 
        value[minusOperatorIndex] === "-" && value[nextMinusOperatorindex] !== "-"){
        console.log("10");
        value.splice(minusOperatorIndex,0,"-");
        setValue([...value]);
        setStoredValue(value);
        
        console.log("minus10", minus);
        console.log("value10", value);
        console.log("minusoperindex10",value[minusOperatorIndex]);
        console.log("minusoperindex10",minusOperatorIndex);
        console.log("minus-next10", value[nextMinusOperatorindex]);
        console.log("minus-next10", nextMinusOperatorindex);
        console.log("value[nextIndex10]", value[nextIndex]);
        console.log("value[nextIndex10]", nextIndex);

      } 
      } 
      else if(!hasOperator) {
            if(value[0] !== "-") {
              console.log("11");
              setPrevValue(value);
              setValue(["-", ...value]);
              } else if (value[0] === "-"){
                console.log("12");
                setValue(prevValue);
              }          
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
          }
          else if (dotCounter > 0 && prevValue.includes(".")) {
            console.log("14-.");
          setValue([...value,digit]);
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
          
          if (digit === "=" && value.length === 0) {
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