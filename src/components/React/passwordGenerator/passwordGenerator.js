import classes from "./passwordGenerator.module.css";

function PasswordGenerator () {
    const opstions = [
        {
            id: 1,
            option: "Uppercase (A-Z)",
            checked: true
        },
        {
            id: 2,
            option: "Lowercase (a-z)",
            checked: true
        },
        {
            id: 3,
            option: "Numbers (0-9)",
            checked: true
        },
        {
            id: 4,
            option: "Symbols (!@%&+)",
            checked: true
        }
    ];

    return (
        <div className={classes.container}>

            <h2 className={classes.title}>Password generator</h2>

            <div className={classes.password_container}>

                <div className={classes.header}>
                    <p className={classes.password}>WRTE#T%7891TE+Y</p>
                    <p>Copy</p>
                    <p>Refresh</p>
                </div>

                <div className={classes.range_wrap}>
                    <label className={classes.range_label}>Length 8</label>
                    <input className={classes.range} max="15" min="4" type="range" step="1"></input>   
                    { opstions.map((item) => 
                       <div className={classes.pass_settings}> 
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