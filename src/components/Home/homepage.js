import classes from "./homePage.module.css";
import gmail from "../../assets/gmail.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

    const allprojects = () => {
        navigate("/allprojects");
    };

  return (    
    <div>
       <div className={classes.containerHome}>
        <div className={classes.container_center}>
          <div className={classes.center}>
              <h1 className={classes.name}>FRONTEND DEVELOPER</h1>
          </div>
          <button className={`${classes.viewprojects}`} onClick={allprojects}>VIEW PROJECTS</button>
        </div>
    </div>
    </div>
  );
};

export default HomePage;