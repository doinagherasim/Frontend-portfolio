import AllProjects from "./projects";
import classes from "./mediumProjects.module.css";
import { useEffect, useRef } from "react";
import videoCat from "../../../assets/videoCat.mp4";
import videoFood from "../../../assets/foodOrderApp.mp4";


function MediumProjects () {
    const videoRef = useRef();
    // useEffect (() => {videoRef.current.play();},[]);

    return (
        <div>
            <AllProjects/>
            <div className={`${classes.wrapper} ${classes.wrapperMedium}`}>
            <div className={classes.projectWrap}>
                <div className={classes.videoWrap}>
                <video src={videoCat} ref={videoRef} muted autoPlay loop className={classes.video}/>
                </div>
                <div className={classes.project_content} style={{textAlign:"left"}}>
                    <h2 style={{color: "black"}} className={classes.title}>FEED YOUR CAT APP</h2>
                    <p className={classes.description}>Designed to help cat owners ensure that their furry friends stay healthy and happy. </p>
                <div className={classes.btn_wrap}>
                    <a className={classes.btn} href="https://cat-feed-app.web.app/" target="_blank">
                        <p className={classes.btnLink}>See how it works → </p>
                    </a>
                    <a className={classes.btn} href="https://github.com/doinagherasim/Feed-the-cat-app/tree/master/src" target="_blank">
                        <p className={classes.btnLink}>See GitHub → </p>
                    </a>  
                </div>
                </div>
            </div>

            <div className={classes.projectWrap}>
            <div className={`${classes.project_content} ${classes.contentBottom} style={textAlign:"right"}`}>
                    <h2 style={{color: "black"}} className={classes.title}>FOOD ORDER APP</h2>
                    <p className={classes.description}>Facilitates restaurant orders with menu selection, quantity adjustment, cost calculation, and delivery information input.</p>
                    <div className={classes.btn_wrap}>
                    <a className={classes.btn} href="https://food-order-app-c1611.web.app/" target="_blank">
                        <p className={classes.btnLink}>See how it works → </p>
                    </a>
                    <a className={classes.btn} href="https://github.com/doinagherasim/E-COMMERCE-FOOD-APP/tree/master/src" target="_blank">
                        <p className={classes.btnLink}>See GitHub → </p>
                    </a>  
                    </div>
                </div>
                <div className={`${classes.videoWrap} ${classes.videoWrapBottom}`}>
                <video src={videoFood} ref={videoRef} muted autoPlay loop className={classes.video}/>
                </div>
            </div>
            </div> 
        </div>
    );
}

export default MediumProjects;