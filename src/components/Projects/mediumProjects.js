import AllProjects from "./projects";
import classes from "./projects.module.css";

function MediumProjects () {
    return (
        <div>
            <AllProjects/>
            <div className={classes.wrapper}>
                <h1>MEDIUM PROJECTS</h1>
            </div> 
        </div>
    );
}

export default MediumProjects;