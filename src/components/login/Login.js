import classes from "./login.module.css";
import { useNavigate } from "react-router-dom";


function Login() {
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
    const Project5 = () => {
        navigate("/javascript");
    };
    const Project6 = () => {
        navigate("/props");
    };


    return <div>
        <div className={classes.container}>
            <h1 className={classes.title}> Summary of projects</h1>
            <div className={classes.btn_wrapper}>
            <button className={`${classes.btn} ${classes.btn_1}`} onClick={Project1}>Project 1- To Do List - react</button>
            <button className={`${classes.btn} ${classes.btn_2}`} onClick={Project2}>Project 2- Password Generator -react</button>
            <button className={`${classes.btn} ${classes.btn_3}`} onClick={Project3}>Project 3- Calculator</button>
            <button className={`${classes.btn} ${classes.btn_4}`} onClick={Project4}>Project 4- Responsive Layout <br></br> 🖥️ → 📱</button>
            <button className={`${classes.btn} ${classes.btn_5}`} onClick={Project5}>Project 5- JavaScript practice</button>
            <button className={`${classes.btn} ${classes.btn_6}`} onClick={Project6}>Project 6- Props</button>
            </div> 
            </div>  
    </div >;
};

export default Login;