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

const smallProjectsdetails = [
    {
    id: 0,
    src: ResponsiveDesign,
    alt: "layout",
    project: Project4,
    title: "RESPONSIVE LAYOUT 🖥️ → 📱",
    href:"https://github.com/Doina2323/Responsive-Layout-destop-tablete-phone/tree/master/src"
 },
{
    id: 1,
    src: ToDoList,
    alt: "todo",
    project: Project1,
    title: "TO DO LIST",
    href:"https://github.com/Doina2323/To-Do-List-app/tree/master/src"
},
{
    id: 2,
    src: Password,
    alt: "password",
    project: Project2,
    title: "PASSWORD GENERATOR",
    href:"https://github.com/Doina2323/Password-Generator-app/tree/master/src"
},
{
    id: 3,
    src: Calculator,
    alt: "calculator",
    project: Project3,
    title: "CALCULATOR",
    href:"https://github.com/Doina2323/Password-Generator-app/tree/master/src"
}
];    

    return (
        <div>
            <AllProjects/>
            <div className={classes.wrapper}>
                {
                    smallProjectsdetails.map((element, index) =>
                    <div className={classes.project_wrap}>
                        <img className={`${classes.image}`} src={element.src} alt={element.alt}/>
                        <button className={`${classes.btn}`} onClick={element.project}>{element.title}</button>
                        <a href={element.href}
                        className={`${classes.btn} ${classes.btnGit}`} target="_blank">
                        <p className={classes.git}>GitHub Code</p></a>
                    </div>
                    )
                }
                {/* <div className={classes.project_wrap}>
                    <img className={`${classes.image}`} src={ResponsiveDesign} alt="layout"/>
                    <button className={`${classes.btn}`} onClicek={Project4}>RESPONSIVE LAYOUT<br></br> 🖥️ → 📱</button>
                    <a href="https://github.com/Doina2323/Responsive-Layout-destop-tablete-phon" 
                    className={`${classes.btn} ${classes.btnGit}`} target="_blank"><p className={classes.git}>GitHub Code</p></a>
                </div>
                <div className={classes.project_wrap}>
                    <img className={classes.image} src={ToDoList} alt="todo"></img>
                    <button className={`${classes.btn}`} onClick={Project1}>TO DO LIST</button>
                    <a href="https://github.com/Doina2323/To-Do-List-app/tree/master/src" 
                    className={`${classes.btn} ${classes.btnGit}`} target="_blank"><p className={classes.git}>GitHub Code</p></a>
                </div>
                <div className={classes.project_wrap}>
                    <img className={classes.image} src={Password} alt="password"></img>   
                    <button className={`${classes.btn}`} onClick={Project2}>PASSWORD GENERATOR</button>
                    <a href="https://github.com/Doina2323/Password-Generator-app/tree/master/src" 
                    className={`${classes.btn} ${classes.btnGit}`} target="_blank"><p className={classes.git}>GitHub Code</p></a>
                </div>
                <div className={classes.project_wrap}>
                    <img className={`${classes.image}`} src={Calculator} alt="calculator"></img> 
                    <button className={`${classes.btn}`} onClick={Project3}>CALCULATOR</button> 
                    <a href="https://github.com/Doina2323/Calculator-app/tree/master/src" 
                    className={`${classes.btn} ${classes.btnGit}`} target="_blank"><p className={classes.git}>GitHub Code</p></a>
                </div> */}
            </div> 
        </div>
    );
}

export default SmallProjects;