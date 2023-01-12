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
    // const [index, setIndex] = useState(null);
  
    
    // 2. clickHndler for each digit
    const clickHandler = (digit) => {

    const operators = ["+", "-", "*", "/","%"];  // Array of operators

    if (operators.includes(prevOperator) && operators.includes(digit)) {
      setValue([...prevValue,digit]);
        return;  // Do not allow the user to enter two or more operators one after another
      } 
        else if ((operatorsTop.includes(digit) ||  operatorsRight.includes(digit))
        && value.length === 0) 
       {
        console.log("va-3", value);
        setValue([]); // do not allow user to enter operators if there is no digits
       } 
       else if (digit === 0 && value.length === 1) {
        return; // do not allow to write 00000 at the bigining
       } 
       else if(digits.includes(digit)){
        setValue([...value, digit]); // return the digit value if it is a number
        setPrevOperator(digit);
       } 
       else if(operators.includes(digit)){
        console.log("6");
        setValue([...value, digit]);
        setPrevOperator(digit);
        setPrevValue([...value]);
        setStoredValue([...value]);
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
     if(digit === "+/-") {
      const operatorsArray = ["+","*", "/","%"];
      console.log("9");
      for(let i = value.length-1; i >=0; i--) {
        // condition when no operator in the array
        if (!operatorsArray.includes(value[i]) && value[0] !== "-") {
          console.log("10-not include");
          setValue(["-", ...value]);
          setPrevValue(value);
        }
        else if(!operatorsArray.includes(value[i])) {
              console.log("11-+/-");
              console.log("value11", value);
              setValue([...prevValue]);
              console.log("ok", !operatorsArray.includes(value[i]) && value[0] === "-");
              console.log("ok2", operatorsArray.includes(value[i]));
              console.log("vali", value[i]);
        }
      

        if(operatorsArray.includes(value[i])){
        setValue([value]);
        console.log("12");
        console.log("value12 before", value);
        let index = i;
        let index1=index+1;
        value.splice(index1,0,"-");
        console.log("index", index);
        console.log("index1", index1);
        console.log("value12 after", value);
        
        }

    //   } else if(value[0] === "-" && operators.includes(digit)){
    //     console.log("11 +/- include");
    //     let index = i;
    //     let index1=index+1;
    //     value.splice(index1,0,"-");
    //     console.log("prev11", prevValue);
    //     console.log("val11", value);
    //     console.log("stored11", storedValue);
        
    //     setValue([value]); // value state when operator in the array
    //   } 
    //   // else if (value[i] === "-") {
    //   //   console.log("12");
    //   //   console.log("include -");
    //   //   setValue([...prevValue]);
    //   // }
    //   else if (!operators.includes(value[i])) {
    //       if( value.length > 0 && value[0] !== "-"){
    //         console.log("13-not include");
    //         setValue(["-", ...value]);
    //         setPrevValue(value);
    //   }
    // }  
    //   else if(value[0] === "-" && !operators.includes(digit)) {
    //     console.log("14-+/-");
    //     setValue([...prevValue]);
    //     console.log("operators", operators);
    //   } else if (operators.includes(value[0])){
    //     console.log("15");
    //     setValue(["-", ...value]);
    //   }
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