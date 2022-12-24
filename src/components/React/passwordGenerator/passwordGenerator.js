import classes from "./passwordGenerator.module.css";
import {React, useState} from "react";

function PasswordGenerator () {
    // 1. list of password options 
    const defaultOptions = [
        { id: 1, option: "Uppercase (A-Z)", optionDetail: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", check: false },
        { id: 2, option: "Lowercase (a-z)", optionDetail: "abcdefghijklmnopqrstuvwxyz", check: false},
        { id: 3, option: "Numbers (0-9)", optionDetail: "0123456789", check: false },
        { id: 4, option: "Symbols (!@%&+)", optionDetail: "!@#$%^&*()_+", check: false }
    ];

    const [password, setPassword] = useState("");
    const [passOptions, setPassOptions] = useState(defaultOptions);

    // 2. Slider values onChange & strong weak password
    const[sliderValue, setSliderValue] = useState(6);
    const [color, setColor] = useState("");
    const [passType, setPassType] = useState("");

    const changeSliderValue = (event) => {
       let passLength = event.target.value;
       setSliderValue(passLength);
       if(passLength <= 6){
        setColor("#ffeb3b");
        setPassType("Attention! This password is weak! Advice: choose more than 6 characters length!");
       } else if (passLength <= 12){
        setColor("orange");
        setPassType("This password is medium!");
       } else {
        setColor("#61f161");
        setPassType("This password is strong!");
       }
    };
        
    // 3. password generator function
    const passwordGenerator = (length) => {
    let passwordResult = "";
    let characters = "";
    passOptions.forEach(function(option) {
        if (option.check === true) {
          characters = characters + option.optionDetail;
        }
      });    
    for (let i=0; i < length; i++){
        passwordResult = passwordResult + characters.charAt(Math.floor(Math.random()* characters.length));
    }
    return passwordResult;
    };

// 4. 
   const showPassword = (index) => {
    const newPassword = [...passOptions];
    if(passOptions[index].check === true) {
     newPassword[index].check = false;
    } else if (passOptions[index].check === false){
     newPassword[index].check = true;
    }
    setPassOptions(newPassword);
    };

  // 5. generate the password and alert
  const submitPassword = (e) => { 
    let showAlert = false;
    passOptions.forEach(function(option) {
        if (option.check === true) {
            e.preventDefault();
            setPassword(passwordGenerator(sliderValue));
        } else if(!showAlert) {
            showAlert = true;
            alert("Please choose one or more options for you password!");
        }
      });    
  };

  // 6. Copy button
  const [copy, setCopy] = useState("Copy");
  const handleCopy = () =>  {
    navigator.clipboard.writeText(password);
    setCopy("Copied!");
  };

  // 7. Refresh button
  const handleRefresh = () => {
    window.location.reload();
  };
  
 // 9. mobile copy and refresh 


    return (
        <div className={classes.container}>

            <h2 className={classes.title}>Password generator</h2>

            <div className={classes.password_container}>

                <div className={classes.header}>
                    <p className={classes.password}>{password}</p>
                    <button className={classes.btn} onClick={handleCopy}>{copy}</button>
                    <button className={classes.btn} onClick={handleRefresh}>Refresh</button>
                </div>

                <div className={classes.slider_wrap}>
                    <label className={classes.slider_label} style={{color:color}}>Length ({sliderValue})</label>
                    <input className={classes.slider} max="15" min="6" type="range" step="1" value={sliderValue} onChange={changeSliderValue}></input>   
                    { passOptions.map((item, index) => 
                       <div className={classes.pass_settings} key={item.id}> 
                       <p className={classes.pass_option}>{item.option}</p>  
                       <div className={classes.toogle_wrap}>
                           <input className={classes.input_toogle} type="checkbox" onChange={() => showPassword(index)}/>
                           <div className={`${classes.on} ${classes.on_off} ${passOptions[index].check ? classes.white : classes.green}`}>ON</div>
                           <div className={`${classes.off} ${classes.on_off} ${passOptions[index].check ? classes.green : classes.white}`}>OFF</div>
                       </div>
                   </div>  
                    )
                    }
                    <button className={classes.pass_btn} type="submit" onClick={submitPassword}>GENERATE PASSWORD</button>
                    <p className={classes.passStrength} style={{color: color}}>{passType}</p>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;