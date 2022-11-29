import { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./alertModal.module.css";

function AlertModal(props) {
    let params = useParams();
    const [okOpen, setOkOpen] = useState(true);
    const alertHandler = function () {
        setOkOpen(false);
    };

    return (
    <div>
        <div className={`${classes.alert} 
        ${props.alertFood ? "" : classes.hide}
        ${okOpen ? "" : classes.hide}`}>
                <p className={classes.text}>Please check the 1-8 servings first!</p>
                <button className={classes.ok} onClick={alertHandler}>OK</button>
        </div >
        <div className={`${classes.alert} 
        ${props.alertFood9 ? "" : classes.hide}
        ${okOpen ? "" : classes.hide}`}>
                <p className={classes.text}>Omg {params.name}! This is extra food🙀!</p>
                <button className={classes.ok} onClick={alertHandler}>OK</button>
        </div >
        <div className={`${classes.alert} 
        ${props.alertFood10 ? "" : classes.hide}
        ${okOpen ? "" : classes.hide}`}>
                <p className={classes.text}>Omg {params.name}! This is extra food🙀!</p>
                <button className={classes.ok} onClick={alertHandler}>OK</button>
        </div >
    </div>
    );
}

export default AlertModal;
