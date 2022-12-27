import React from "react";
import classes from "./calculator.css";
import {useState} from "react";

function Calculator() {
    // 1. default values

    const otherOperators = ["DEL","C", "+/-", "%"];
    const digits =[ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ","];
    const operators = ["/","x","-","+"];
    const [value, setValue] = useState([]);
    const [displayValue, setDisplayValue] = useState([0]);
    const [result, setResult] = useState(0);

    // 2. clickHndler
    const clickHandler = (digit) => {
        let currentValue = [...value, digit];
        setValue(currentValue);
        console.log("value",currentValue);
    };
    

   return (
        <div className="container">
            <div className="calculator_container">
                <div className="screen_container">
                    <p className="displayDigit">Ans is {displayValue}</p>
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
                    <button className="button" style={{backgroundColor:"#233EDC"}}>=</button>
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