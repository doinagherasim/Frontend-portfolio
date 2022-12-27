import classes from "./login.module.css";
import { useNavigate } from "react-router-dom";


function Login() {
    let navigate = useNavigate();

    const Project1 = () => {
        navigate("/calculator");
    };
    const Project2 = () => {
        navigate("/project2");
    };
    const Project3 = () => {
        navigate("/project3");
    };
    const Project4 = () => {
        navigate("/todolist");
    };
    const Project5 = () => {
        navigate("/javascript");
    };
    const Project6 = () => {
        navigate("/password");
    };


    return <div>
        <div className={classes.container}>
            <h1 className={classes.title}> Summary of projects</h1>
            <div className={classes.btn_wrapper}>
            <button className={`${classes.btn} ${classes.btn_1}`} onClick={Project1}>Project 1- Calculator</button>
            <button className={`${classes.btn} ${classes.btn_2}`} onClick={Project2}>Project 2- Responsive Layout <br></br> 🖥️ → 📱</button>
            <button className={`${classes.btn} ${classes.btn_3}`} onClick={Project3}>Project 3- React props</button>
            <button className={`${classes.btn} ${classes.btn_4}`} onClick={Project4}>Project 4- React To Do List</button>
            <button className={`${classes.btn} ${classes.btn_4}`} onClick={Project5}>Project 5- JavaScript practice</button>
            <button className={`${classes.btn} ${classes.btn_4}`} onClick={Project6}>Project 6- PasswordGenerator</button>
            </div> 
            </div>  
    </div >;
};

export default Login;