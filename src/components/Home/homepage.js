import classes from "./homePage.module.css";
import gmail from "../../assets/gmail.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

    const allprojects = () => {
        navigate("/allprojects");
    };

  return (
    <div className={classes.containerHome}>
        <div className={classes.header}>
            <div className={classes.contact}>
              <img className={classes.contactImg} src={gmail} width="40" height="40"/>
              <a href="mailto:gherasimdoina93@gmail.com" className={classes.mail}> gherasimdoina93@gmail.com</a>
            </div>
            <div className={classes.menu}>
                <ul className={classes.menu_ul}>
                    <li>About me</li>
                    <li>Resources</li>
                    <li><a className={classes.link} href="/certificates"> Certificates</a></li>
                    <li><a className={classes.link} href="/allprojects"> All projects</a></li>
                </ul>
            </div>
        </div>
        <div className={classes.container_center}>
          <div className={classes.center}>
              <h1 className={classes.name}>FRONTEND DEVELOPER</h1>
          </div>
          <button className={`${classes.viewprojects}`} onClick={allprojects}>VIEW PROJECTS</button>
        </div>
    </div>
  );
};

export default HomePage;