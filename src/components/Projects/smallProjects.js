import classes from "./projects.module.css";
import { useNavigate } from "react-router-dom";
import Calculator from "../../assets/Calculator.png";
import ToDoList from "../../assets/ToDoList.png";
import Password from "../../assets/Password.png";
import ResponsiveDesign from "../../assets/ResponsiveDesign.png";
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
    const Project4 = () => {
        navigate("/responsivelayout");
    };

    return (
        <div>
            <AllProjects/>
            <div className={classes.wrapper}>
                <div className={classes.project_wrap}>
                    <img className={`${classes.image}`} src={ResponsiveDesign} alt="layout"/>
                    <button className={`${classes.btn}`} onClick={Project4}>RESPONSIVE LAYOUT<br></br> 🖥️ → 📱</button>
                    <button className={`${classes.btn} ${classes.btnGit}`}>GitHub Code</button>
                </div>
                <div className={classes.project_wrap}>
                    <img className={classes.image} src={ToDoList} alt="todo"></img>
                    <button className={`${classes.btn}`} onClick={Project1}>TO DO LIST</button>
                    <button className={`${classes.btn} ${classes.btnGit}`}>GitHub Code</button>
                </div>
                <div className={classes.project_wrap}>
                    <img className={classes.image} src={Password} alt="password"></img>   
                    <button className={`${classes.btn}`} onClick={Project2}>PASSWORD GENERATOR</button>
                    <button className={`${classes.btn} ${classes.btnGit}`}>GitHub Code</button>
                </div>
                <div className={classes.project_wrap}>
                    <img className={`${classes.image}`} src={Calculator} alt="calculator"></img> 
                    <button className={`${classes.btn}`} onClick={Project3}>CALCULATOR</button> 
                    <button className={`${classes.btn} ${classes.btnGit}`}>GitHub Code</button>
                </div>
            </div> 
        </div>
    );
}

export default SmallProjects;