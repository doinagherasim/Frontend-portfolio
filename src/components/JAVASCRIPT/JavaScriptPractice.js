import classes from "./JavaScriptPractice.module.css";
import {React, useState} from "react";

function JavaScriptPractice () {
    // question 1
    // const [password, setPassword] = useState("");
    // const [passwordLength, setPasswordLength] = useState(8);
  
    // const generatePassword = () => {
    //   let pwd = "";
    //   for (let i = 0; i < passwordLength; i++) {
    //     const charType = Math.floor(Math.random() * 4);
    //     if (charType === 0) {
    //       pwd += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    //     } else if (charType === 1) {
    //       pwd += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    //     } else if (charType === 2) {
    //       pwd += Math.floor(Math.random() * 10);
    //     } else {
    //       const specialChars = "!@#$%^&*()";
    //       pwd += specialChars[Math.floor(Math.random() * specialChars.length)];
    //     }
    //   }
    //   setPassword(pwd);
    // };

    // part 2

    // const [passwordLength, setPasswordLength] = useState(0);
    // const [password, setPassword] = useState("");
  
    // const characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  
    // const generatePassword = (event) => {
    //   event.preventDefault();
    //   let newPassword = "";
    //   for (let i = 0; i < passwordLength; i++) {
    //     newPassword += characterList[Math.floor(Math.random() * characterList.length)];
    //   }
    //   setPassword(newPassword);
    // };
  
    // PART 3
    const [value, setValue] = useState(50);

    return (
      <div>
        {/* <form>
          <label htmlFor="password-length">Password Length:</label>
          <input
            type="number"
            id="password-length"
            value={passwordLength}
            onChange={e => setPasswordLength(e.target.value)}
          />
          <button type="button" onClick={generatePassword}>Generate Password</button>
        </form>
        <p>{password}</p> */}
        {/* <p>A DOUA</p>
        <form onSubmit={generatePassword}>
        <label htmlFor="passwordLength">Password Length:</label>
        <input
          type="number"
          id="passwordLength"
          value={passwordLength}
          onChange={(event) => setPasswordLength(event.target.value)}
        />
        <button type="submit">Generate Password</button>
      </form>
      {password && <p>{password}</p>} */}
       <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <span>{value}</span>
      </div>
    );
};

export default JavaScriptPractice;