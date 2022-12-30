import {React, useState} from "react";

function JavaScriptPractice () {
  const [myArray, setMyArray] = useState([1, 2, 3, 4, 5]);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    if (myArray.length > 0) {
      const newArray = [...myArray];
      newArray.splice(counter, 1);
      setMyArray(newArray);
      setCounter((counter + 1) % myArray.length);
    }
  };
   
    return (
      <div>
         <button onClick={handleClick}>Delete element</button>
      <p>Elements in array: {myArray.join(", ")}</p>
      </div>
    );
};

export default JavaScriptPractice;