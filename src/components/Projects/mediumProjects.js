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
                    <a href="https://github.com/Doina2323/CAT-SMART-APP/tree/master/src" 
                    className={`${classes.btnMedium} ${classes.btnGit}`} target="_blank">
                    <p className={classes.git}>GitHub Code</p></a>
                    </div>
                </div>
                <div className={classes.projectWrap}>
                    <img src={diceGame} className={classes.img}/>
                    <img src={diceGameWinner} className={classes.img}/>
                    <div className={classes.btnwrap}>
                    <button className={`${classes.btnMedium}`}>DICE GAME</button>
                    <a href="https://github.com/Doina2323/Dice-Game/tree/master/src" 
                    className={`${classes.btnMedium} ${classes.btnGit}`} target="_blank">
                    <p className={classes.git}>GitHub Code</p></a>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default MediumProjects;