import classes from "./JavaScriptPractice.module.css";

function JavaScriptPractice () {
    // question 1
    const numbers = [2,4,6,7,8];
    const sumFunction = function (array){
        const sum = array.reduce((accumulator, current) => accumulator + current);
        return sum;
    };

    // question 2
    const string = "DOINA";
    const reverseStr = function(str) {
        const string = [...str].reverse().join("");
        return string;
    };

    // question 3- password of 8 characters


    return (
        <div>
            <p>1. Write a function that takes an array of numbers and returns the sum of the numbers</p>
            <p>{sumFunction(numbers)}</p>
            <p>2. Write a function that takes a string and returns a new string with the characters in reverse order
</p>
            <p>{reverseStr(string)}</p>
            <p>3. Write a program that generates a random password with a specified length and character set</p>
        </div>
    );
};

export default JavaScriptPractice;