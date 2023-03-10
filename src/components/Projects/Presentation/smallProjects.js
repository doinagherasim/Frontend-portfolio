import classes from "./smallProjects.module.css";
import { useNavigate } from "react-router-dom";
import Calculator from "../../../assets/Calculator.png";
import ToDoList from "../../../assets/ToDoList.png";
import Password from "../../../assets/Password.png";
import DiceGame from "../../../assets/DiceGame.png";
import AllProjects from "./projects";

function SmallProjects() {
    let navigate = useNavigate();

    const Project1 = () => {
        navigate("/todolist");
    };
    const Project2 = () => {
        navigate("/password");
    };
    const Project3 = () => {
        navigate("/calculator");
    };

const smallProjectsdetails = [
{
    id: 1,
    src: ToDoList,
    alt: "todo",
    project: Project1,
    title: "TO DO LIST",
    href:"https://github.com/doinagherasim/To-Do-List-app/tree/master/src"
},
{
    id: 2,
    src: Password,
    alt: "password",
    project: Project2,
    title: "PASSWORD GENERATOR",
    href:"https://github.com/doinagherasim/Password-Generator-app/tree/master/src"
},
{
    id: 3,
    src: Calculator,
    alt: "calculator",
    project: Project3,
    title: "CALCULATOR",
    href:"https://github.com/doinagherasim/Calculator-app/tree/master/src"
}
];    

    return (
        <div>
            <AllProjects/>
            <div className={classes.wrapper}>
            <div className={classes.project_wrap}>
                        <img className={`${classes.image}`} src={DiceGame} alt="diceGame"/>
                        <a className={`${classes.btn}`}  href="https://play-dice-game-online.web.app/" target="_blank">
                            <p className={classes.btnLink}>DICE GAME</p>
                        </a>
                        <a href="https://github.com/doinagherasim/Dice-Game/tree/master/src"
                        className={`${classes.btn} ${classes.btnGit}`} target="_blank">
                        <p className={classes.git}>GitHub Code</p></a>
                    </div>
                {
                    smallProjectsdetails.map((element, index) =>
                    <div className={classes.project_wrap} key={index}>
                        <img className={`${classes.image}`} src={element.src} alt={element.alt}/>
                        <button className={`${classes.btn}`} onClick={element.project}>{element.title}</button>
                        <a href={element.href}
                        className={`${classes.btn} ${classes.btnGit}`} target="_blank">
                        <p className={classes.git}>GitHub Code</p></a>
                    </div>
                    )
                }
                </div>
        </div>
    );
}

export default SmallProjects;