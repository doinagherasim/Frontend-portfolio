import classes from "./smallProjects.module.css";


function AllProjects() {
    return (
    <div>
        <div className={classes.container}>
            <h1 className={classes.title}> Summary of projects</h1>
            <div className={classes.subtitle_container}>
            <a className={classes.subtitle} href="/allprojects/small_projects"> Small Projects</a> 
            <a className={classes.subtitle} href="/allprojects/medium_projects"> Medium Projects</a>
            </div>
        </div>  
    </div >
    );
};

export default AllProjects;