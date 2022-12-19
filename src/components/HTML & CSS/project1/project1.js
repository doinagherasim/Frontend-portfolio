import { useNavigate } from "react-router-dom";
import classes from "./project1.module.css";

function Project1() {
    let navigateHome = useNavigate();
    const home = () => {
        navigateHome("/");
    };
    return (
        <div>  
            <div className={classes.home}><button className={classes.btn_home} onClick={home}>  BACK </button></div>      
            <div className={classes.header}>
<h1>Living the simple life</h1>
<p className={classes.subtitle}>A blog exploring minimalism in life</p>
<nav>
 <ul>
    <li className={classes.li1}><a href="https://en.wikipedia.org/wiki/Home" className={classes.active}>Home</a></li>
    <li className={classes.li1}><a href="https://en.wikipedia.org/wiki/About.me">About me</a></li>
    <li className={classes.li1}><a href="https://en.wikipedia.org/wiki/Blog">Recent posts</a></li>
 </ul>
</nav>
</div>
<br/>
<div className={classes.header1}>
    <div className={classes.container}>
        <div className={classes.title}>
            <h1>Living the simple life</h1>
            <p className={classes.subtitle}>A blog exploring minimalism in life</p>
        </div>
        <nav>
            <ul className={classes.ul1}>
                <li className={classes.li2}><a href="https://en.wikipedia.org/wiki/Home" className={classes.active}>Home</a></li>
                <li className={classes.li2}><a href="https://en.wikipedia.org/wiki/About.me">About me</a></li>
                <li className={classes.li2}><a href="https://en.wikipedia.org/wiki/Blog">Recent posts</a></li>
            </ul>
        </nav>
        </div>
    </div>
</div>
    );
};

export default Project1;