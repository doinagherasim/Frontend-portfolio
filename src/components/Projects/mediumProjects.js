import AllProjects from "./projects";
import classes from "./projects.module.css";
import login from "../../assets/login.png";
import cat_app from "../../assets/cat_app.png";
import diceGameWinner from "../../assets/diceGameWinner.png";
import diceGame from "../../assets/diceGame.png";

function MediumProjects () {

    return (
        <div>
            <AllProjects/>
            <div className={classes.wrapper}>
                <div className={classes.projectWrap}>
                    <img src={login} className={classes.img}/>
                    <img src={cat_app} className={classes.img}/>
                    <div className={classes.btnwrap}>
                    <button className={`${classes.btnMedium}`}>CAT FOOD APP</button>
                    <button className={`${classes.btnMedium} ${classes.btnGit}`}>GitHub Code</button>
                    </div>
                </div>
                <div className={classes.projectWrap}>
                    <img src={diceGame} className={classes.img}/>
                    <img src={diceGameWinner} className={classes.img}/>
                    <div className={classes.btnwrap}>
                    <button className={`${classes.btnMedium}`}>DICE GAME</button>
                    <button className={`${classes.btnMedium} ${classes.btnGit}`}>GitHub Code</button>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default MediumProjects;