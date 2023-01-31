import classes from "./homePage.module.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

    const allprojects = () => {
        navigate("/allprojects/small_projects");
    };

  return (    
    <div>
       <div className={classes.containerHome}>
        <div className={classes.container_center}>
          <div className={classes.center}>
              <h2 className={classes.name}>FRONTEND DEVELOPER</h2>
          </div>
          <button className={`${classes.viewprojects}`} onClick={allprojects}>VIEW PROJECTS</button>
        </div>
        <div className={classes.copyright}>
            <p className={classes.rights}>© 2023 Doina Gherasim. All rights reserved.</p>
        </div>
    </div>
    </div>
  );
};

export default HomePage;