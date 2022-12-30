import React from "react";
import classes from "./calculator.css";
import {useState} from "react";

function Calculator() {
    // 1. Declare state variables
    const otherOperators = ["DEL","C", "+/-", "%"];
    const digits =[ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".","="];
    const operators = ["/","x","-","+"];
    const [value, setValue] = useState([]);
    const [firstNumber, setFirstNumber] = useState([]);
    const [secondNumber, setSecondNumber] = useState([]);
    const [operator, setOperator] = useState(null);
    // const [result, setResult] = useState(0);

    // 2. clickHndler
    const clickHandler = (digit) => {
     setValue([...value, digit]);
     if(digit === "C") {
        setValue([]);
        return;
     }
     if (digit === "DEL") {
        setValue(value.slice(0,-1));
     }
    //  if (digit === "%") {
    //     const percent = firstNumber / 100;
    //     setValue(percent);
    //     console.log("value", value);
    //  }
     if(digit === "/" || digit === "x" || digit === "+" || digit === "-" ) {
        // set first part of the array
        setFirstNumber(parseInt(value.join("")),10);
        // set the oprator that was clicked
        setOperator(digit);
     }

     if(digit === "=") {
        // find the index of the used oprator => [2,3,4,"/",4,5]
        const index = value.indexOf(operator);
       // define the second part of the array, after the operator
        const secondNr= parseInt(value.slice(index+1).join(""),10);
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
            default:
                result = NaN;
        }

        console.log("result", result);
        setValue([result]);
        
     }
    };

   return (
        <div className="container">
            <div className="calculator_container">
                <div className="screen_container">
                    <p className="displayDigit">Ans is {firstNumber}</p>
                    <p className="screen">{value}</p></div>

                <div className="buttonBox buttonBoxGrey">{
                    otherOperators.map((element, index)=>
                    <button className="button" style={{backgroundColor:"#8080809e"}} key={index} 
                    onClick={()=>{clickHandler(element);}}>
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
                    <button className="button" style={{backgroundColor:"#9198e5"}} key={index} 
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