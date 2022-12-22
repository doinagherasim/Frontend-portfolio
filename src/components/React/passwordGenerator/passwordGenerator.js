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

    // 2. Slider values onChange
    const[sliderValue, setSliderValue] = useState(6);

    const changeSliderValue = (event) => {
       setSliderValue(event.target.value);
    };
        
    // 3. password generator check working on console
    const passwordGenerator = (length) => {
    let passwordResult = "";
    let characters = "";
    if(passOptions[0].check === true) { characters = characters + passOptions[0].optionDetail;}
    if(passOptions[1].check === true) { characters = characters + passOptions[1].optionDetail;}
    if(passOptions[2].check === true) { characters = characters + passOptions[2].optionDetail;}
    if(passOptions[3].check === true) { characters = characters + passOptions[3].optionDetail;}

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

  // 5. generate the password
  const submitPassword = (e) => {
  e.preventDefault();
  setPassword(passwordGenerator(sliderValue));
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
                    <label className={classes.slider_label}>Length ({sliderValue})</label>
                    <input className={classes.slider} max="15" min="6" type="range" step="1" value={sliderValue} onChange={changeSliderValue}></input>   
                    { passOptions.map((item, index) => 
                       <div className={classes.pass_settings} key={item.id}> 
                       <p className={classes.pass_option}>{item.option}</p>  
                       <div className={classes.toogle_wrap}>
                           <input className={classes.input_toogle} type="checkbox" onChange={() => showPassword(index)}/>
                           <div className={`${classes.on} ${classes.on_off}`}>ON</div>
                           <div className={`${classes.off} ${classes.on_off}`}>OFF</div>
                       </div>
                   </div>  
                    )
                    }
                    <button className={classes.pass_btn} type="submit" onClick={submitPassword}>GENERATE PASSWORD</button>
                </div>

            </div>
        </div>
    );
};

export default PasswordGenerator;