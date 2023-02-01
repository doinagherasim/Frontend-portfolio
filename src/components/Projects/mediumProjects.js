import AllProjects from "./projects";
import classes from "./projects.module.css";
import login from "../../assets/login.png";
import cat_app from "../../assets/cat_app.png";
import diceGameWinner from "../../assets/diceGameWinner.png";
import diceGame from "../../assets/diceGame.png";

function MediumProjects () {
    const mediumProjects = [
        {id: 0,
        src1: login,
        src2: cat_app,
        description: `App for cat lovers that will help you look after your cat and feed it properly.
        <br></br>8 servings, plus 2 extra food.`,
        appLink: "https://cat-feed-app.web.app/",
        title: "CAT FOOD APP",
        gitHub: "https://github.com/doinagherasim/Feed-the-cat-app/tree/master/src"
      },
      {id: 1,
        src1: diceGame,
        src2: diceGameWinner,
        description: `The basic premise of the game is this: you roll the dice. Some combinations of dice will score points, while others don't, like 1. You take out the dice that have scored points and then decide whether to keep that score, or re-roll the remaining dice to try to score more points. Winning score is 20.
        <br></br>`,
        appLink: "https://play-dice-game-online.web.app/",
        title: "DICE GAME",
        gitHub: "https://github.com/doinagherasim/Dice-Game/tree/master/src"
      }
    ];

    return (
        <div>
            <AllProjects/>
            <div className={classes.wrapper}>
               { mediumProjects.map ((element) =>
            <div className={classes.projectWrap}>
                    <img src={element.src1} className={classes.img}/>
                    <img src={element.src2} className={classes.img}/>
                    <p className={classes.description}>{element.description}</p>
                    <div className={classes.btnwrap}>
                    <a href={element.appLink} 
                    className={`${classes.btnMedium} ${classes.btnGit}`} target="_blank">
                    <p className={classes.git}>{element.title}</p></a>
                    <a href={element.gitHub} 
                    className={`${classes.btnMedium} ${classes.btnGit}`} target="_blank">
                    <p className={classes.git}>GitHub Code</p></a>
                    </div>
                </div>
               )}
            </div> 
        </div>
    );
}

export default MediumProjects;