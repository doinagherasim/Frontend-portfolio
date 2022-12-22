import classes from "./passwordGenerator.module.css";
import {React, useState} from "react";

function PasswordGenerator () {
    // 1. list of password options 
    const options = [
        { id: 1, option: "Uppercase (A-Z)", uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", checked: false },
        { id: 2, option: "Lowercase (a-z)", lowercases: "abcdefghijklmnopqrstuvwxyz", checked: false},
        { id: 3, option: "Numbers (0-9)", numbers: "0123456789", checked: false },
        { id: 4, option: "Symbols (!@%&+)", symbols: "!@#$%^&*()_+", checked: false }
    ];

    const upper_lower = options[0].uppercase + options[1].lowercases;
    const upper_numbers = options[0].uppercase + options[2].numbers;
    const upper_symbols = options[0].uppercase + options[3].symbols;
    const upper_lower_numbers = options[0].uppercase + options[1].lowercases + options[2].numbers;
    const upper_numbers_symbols = options[0].uppercase + options[2].numbers + options[3].symbols;
    const upper_lower_symbols = options[0].uppercase + options[1].lowercases + options[3].symbols;
    const all_options = options[0].uppercase + options[1].lowercases + options[2].numbers + options[3].symbols;
    const lower_numbers = options[2].numbers + options[1].lowercases;
    const lower_symbols = options[3].symbols+ options[1].lowercases;
    const numbers_symbols = options[2].numbers + options[3].symbols;

    // 2. Slider values onChange
    const[sliderValue, setSliderValue] = useState(6);

    const changeSliderValue = (event) => {
       setSliderValue(event.target.value);
    };

   // 3. set characterList 
   const characterList = () => {
    if(options[0].checked === true && options[1].checked === false && options[2].checked === false && options[3].checked === false) {
        return options[0].uppercase;
      } 
        else if ( options[0].checked === true && options[1].checked === true && options[2].checked === false && options[3].checked === false ) {
                  return upper_lower;
        }
        else if ( options[0].checked === true && options[1].checked === false && options[2].checked === true && options[3].checked === false) {
            return upper_numbers;
        }
        else if ( options[0].checked === true && options[1].checked === false && options[2].checked === false && options[3].checked === true ) {
            return upper_symbols;
        }
        else if ( options[0].checked === true && options[1].checked === true && options[2].checked === true && options[3].checked === false) {
            return upper_lower_numbers;
        }
        else if ( options[0].checked === true && options[1].checked === false && options[2].checked === true && options[3].checked === true) {
            return upper_numbers_symbols;
        }
        else if ( options[0].checked === true && options[1].checked === true && options[2].checked === false && options[3].checked === true) {
            return upper_lower_symbols;
        }
        else if ( options[0].checked === false && options[1].checked === true && options[2].checked === true && options[3].checked === false) {
            return lower_numbers;
        }
        else if ( options[0].checked === false && options[1].checked === true && options[2].checked === false && options[3].checked === true) {
            return lower_symbols;
        }
        else if ( options[0].checked === false && options[1].checked === false && options[2].checked === true && options[3].checked === true) {
            return numbers_symbols;
        }
        else if ( options[0].checked === true && options[1].checked === true && options[2].checked === true && options[3].checked === true) {
            return all_options;
        }
        else {
            // alert ("Please choose your options");
            console.log("Please choose your options");
        }
   };
   
   console.log("here",characterList());


    return (
        <div className={classes.container}>

            <h2 className={classes.title}>Password generator</h2>

            <div className={classes.password_container}>

                <div className={classes.header}>
                    <p className={classes.password}>WRTE#T%7891TE+Y</p>
                    <p>Copy</p>
                    <p>Refresh</p>
                </div>

                <div className={classes.slider_wrap}>
                    <label className={classes.slider_label}>Length ({sliderValue})</label>
                    <input className={classes.slider} max="15" min="6" type="range" step="1" value={sliderValue} onChange={changeSliderValue}></input>   
                    { options.map((item) => 
                       <div className={classes.pass_settings} key={item.id}> 
                       <p className={classes.pass_option}>{item.option}</p>  
                       <div className={classes.toogle_wrap}>
                           <input className={classes.input_toogle} type="checkbox"/>
                           <div className={`${classes.on} ${classes.on_off}`}>ON</div>
                           <div className={`${classes.off} ${classes.on_off}`}>OFF</div>
                       </div>
                   </div>  
                    )
                    }
                    <button className={classes.pass_btn}>GENERATE PASSWORD</button>
                </div>

            </div>
        </div>
    );
};

export default PasswordGenerator;