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
                    <p className={classes.description}>App for cat lovers that will help you look after your cat and feed it properly.
                    <br></br>
                    8 servings, plus 2 extra food.</p>
                    <div className={classes.btnwrap}>
                    <a href="https://cat-feed-app.web.app/" 
                    className={`${classes.btnMedium} ${classes.btnGit}`} target="_blank">
                    <p className={classes.git}>CAT FOOD APP</p></a>
                    <a href="https://github.com/doinagherasim/Feed-the-cat-app/tree/master/src" 
                    className={`${classes.btnMedium} ${classes.btnGit}`} target="_blank">
                    <p className={classes.git}>GitHub Code</p></a>
                    </div>
                </div>

                <div className={classes.projectWrap}>
                    <img src={diceGame} className={classes.img}/>
                    <img src={diceGameWinner} className={classes.img}/>
                    <p className={classes.description}>The basic premise of the game is this: you roll the dice. Some combinations of dice will score points, while others don't, like 1. You take out the dice that have scored points and then decide whether to keep that score, or re-roll the remaining dice to try to score more points. Winning score is 20.
                    <br></br></p>
                    <div className={classes.btnwrap}>
                    <a href="https://play-dice-game-online.web.app/" 
                    className={`${classes.btnMedium} ${classes.btnGit}`} target="_blank">
                    <p className={classes.git}>DICE GAME</p></a>
                    <a href="https://github.com/doinagherasim/Dice-Game/tree/master/src" 
                    className={`${classes.btnMedium} ${classes.btnGit}`} target="_blank">
                    <p className={classes.git}>GitHub Code</p></a>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default MediumProjects;