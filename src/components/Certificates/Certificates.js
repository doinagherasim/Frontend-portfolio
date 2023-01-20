import { useState } from "react";
import classes from "./certificates.module.css";
import htmlCertificate from "../../assets/HTMLCSS.png";
import jsCertificate from "../../assets/jsCertificate.png";
import reactCertificate from "../../assets/reactCertificate.png";


function Certificates() {
    const [showDetails, setShowDetails] = useState(false);
    const detailsHandler = () => {
        if(showDetails === false) {
        setShowDetails(true);
    } else {
        setShowDetails(false);
    } };

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Certificates 2022- 2023</h1>
            <div className={classes.wrapper}>
            <div className={classes.certificate}>
                <img className={classes.zoom} src={htmlCertificate} width="90%"/>
                <h3>HTML and CSS certificate</h3>
                <button className={classes.btnDetails} onClick={detailsHandler}>View details</button>
                <ul className={`${classes.details} ${showDetails ? classes.details : classes.hidden}`} >
                    <li>- modern CSS, including flexbox and CSS Grid for layout</li>
                    <li>- important CSS concepts such as the box model, positioning schemes, inheritance, solving selector conflicts, etc.</li>
                    <li>- responsive design.</li>
                </ul>
            </div>
            <div className={classes.certificate}>
                <img className={classes.zoom} src={jsCertificate} width="90%"/>
                <h3>JavaScript certificate</h3>
                <button className={classes.btnDetails} onClick={detailsHandler}>View details</button>
                <ul className={`${classes.details} ${showDetails ? classes.details : classes.hidden}`}>
                    <li>- JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings</li>
                    <li>- arrow functions, destructuring, spread operator, default arguments</li>
                    <li>- JavaScript works behind the scenes</li>
                    <li>- object-oriented programming</li>
                    <li>- the event loop, promises, async/await, and error handling</li>
                    </ul>
            </div>
            <div className={classes.certificate}>
                <img className={classes.zoom} src={reactCertificate} width="90%"/>
                <h3>React certificate</h3>
                <button className={classes.btnDetails} onClick={detailsHandler}>View details</button>
                <ul className={`${classes.details} ${showDetails ? classes.details : classes.hidden}`}>
                    <li>- core basics: How React works, building components with React & building UIs with React</li>
                    <li>- components, props & dynamic data binding</li>
                    <li>- user events and state.</li>
                    <li>- react Hooks</li>
                    <li>- sending Http requests & handling transitional states + responses</li>
                    <li>- handling forms and user input, incl. validation</li>
                    <li>- routing with React Router</li>
                    <li>- combining React with TypeScript</li>
                    <li>- handling forms and user input, incl. validation</li>
                    </ul>
            </div>
        </div>
        </div>
    );
};

export default Certificates;