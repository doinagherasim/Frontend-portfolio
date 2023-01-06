import React from "react";
import classes from "./calculator.css";
import {useState} from "react";

function Calculator() {
    // 1. Declare state variables
    const otherOperators = ["DEL","C", "+/-", "%"];
    const digits =[ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".","="];
    const operators = ["/","x","-","+"];
    const [value, setValue] = useState([]);
    const [storedValue, setStoredValue] = useState([]);
    const [firstNumber, setFirstNumber] = useState([]);
    const [secondNumber, setSecondNumber] = useState([]);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState(null);
    
    // 2. clickHndler for each digit
    const clickHandler = (digit) => {
        // const firstNr = Number(value.join(""));
        setValue([...value, digit]);

     if(digit === "/" || digit === "x" || digit === "+" || digit === "-") {
        // set first part of the array
        const firstNr = Number(value.join(""));
        setFirstNumber(firstNr);
        // set the oprator that was clicked
        setOperator(digit);
        setStoredValue(firstNr);
     } 

     if(digit === "%") {
        const firstNr = Number(value.join(""));
        let result;
        result =firstNr/100;
        setValue([result]);  
        setStoredValue(firstNr+operator + "%");   
        setResult([result]);
     }
     if(digit === "+/-"){
        console.log("-");
     }

     if(digit === "=") {
        // find the index of the used oprator => [2,3,4,"/",4,5]
        const index = value.indexOf(operator);
       // define the second part of the array, after the operator
        const secondNr= Number(value.slice(index+1).join(""));
        setSecondNumber(secondNr);
       // calculate the result
        let result;
        switch (operator) {
            case "+": 
                result = firstNumber + secondNr;
                break;
            case "-":
                result = firstNumber - secondNr;
                break;
            case "/":
                result = firstNumber / secondNr;
                break;
            case "x":
                result = firstNumber * secondNr;
                break;    
            case "%":
                result = firstNumber / 100;
                break;              
            default:
                result = NaN;
        }
        setValue([result]);  
        setStoredValue(storedValue+operator+secondNr + "=");   
        setResult([result]);
     }
    };

    // 2. clickHandler for DEL, C, %
    const clickHandlerOperator = (digit) => {
        if (digit === "DEL" && value.length === 1) {
            setValue(value.slice(0,-1));
            setStoredValue([]);
         }  else if (digit === "DEL" && value.length > 1) {
                setValue(value.slice(0,-1));
         };

         if(digit === "C") {
            setValue([]);
            setStoredValue([]);
         };
    };
    

   return (
        <div className="container">
            <div className="calculator_container">
                <div className="screen_container">
                    <p className="displayDigit">{storedValue}</p>
                    <p className="screen">{value}</p></div>

                <div className="buttonBox buttonBoxGrey">{
                    otherOperators.map((element, index)=>
                    <button className="button btnGrey" key={index} 
                    onClick={()=>{clickHandlerOperator(element);}}>
                        <p className="text">{element}</p></button>
                    )}
                </div>
                <div className="container2">
                <div className="buttonBox buttonBoxBlack">{
                    digits.map((element, index)=>
                    <button className="button" key={index} onClick={()=>{clickHandler(element);}}>
                        <p className="text">{element}</p></button>
                    )}
                </div>
                <div className="buttonBox buttonBoxOperators">{
                    operators.map((element, index)=>
                    <button className="button btnBlue" key={index} 
                    onClick={()=>{clickHandler(element);}}>
                        <p className="text">{element}</p></button>
                    )}
                </div>
                </div>
                </div>
            </div>
    );
};

export default Calculator;