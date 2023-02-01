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
        description: `This app helps cat owners keep track of their cat's food intake.
        The application also has an alert for extra servings, 
        to help prevent overfeeding and ensure the cat's health.`,
        appLink: "https://cat-feed-app.web.app/",
        title: "CAT FOOD APP",
        gitHub: "https://github.com/doinagherasim/Feed-the-cat-app/tree/master/src"
      },
      {id: 1,
        src1: diceGame,
        src2: diceGameWinner,
        description: `Dice Game app for two players where the goal is to reach 20 points. 
        Each turn, players roll a virtual dice and add to their score. If a 1 is rolled, the turn ends. 
        Winning score is 20.`,
        appLink: "https://play-dice-game-online.web.app/",
        title: "DICE GAME",
        gitHub: "https://github.com/doinagherasim/Dice-Game/tree/master/src"
      }
    ];

    return (
        <div>
            <AllProjects/>
            <div className={`${classes.wrapper} ${classes.wrapperMedium}`}>
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