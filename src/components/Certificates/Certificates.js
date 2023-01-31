import { useState } from "react";
import classes from "./certificates.module.css";
import htmlCertificate from "../../assets/HTMLCSS.png";
import jsCertificate from "../../assets/jsCertificate.png";
import reactCertificate from "../../assets/reactCertificate.png";


function Certificates() {
    const certificatedetails = [
        {
            id: 0,
            src: htmlCertificate,
            title: "HTML and CSS certificate",
            details: ` 
 - Selectors: used to select HTML elements and apply styles 
to them;
 - Box model: used to calculate the size and position of 
elements on a web page;
 - Layout: layout options, including flexbox and grid, which can 
be used to create complex and responsive layouts;
 - Typography: a wide range of options for controlling 
typography, such as font size, font family, and text alignment;
 - Transitions and animations: create animations and transitions 
 between different states of an element;
 - Flexbox and Grid: layout modules in CSS which are used 
to create responsive and dynamic layouts;
 - Media queries: used to apply different styles based on 
the screen size and device type. `,
            show: false,
        },
        {
            id: 1,
            src: jsCertificate,
            title: "JavaScript certificate",
            details: `
 - JavaScript fundamentals: variables, if/else, operators, 
boolean logic, functions, arrays, objects, loops, strings;
 - Event handling: haw to handle events such as clicks, 
mouse movements, and keyboard input;
 - Arrow functions, destructuring, spread operator, 
default arguments;
 - Haw JavaScript works behind the scenes;
 - Object-oriented programming;
 - The event loop, promises, async/await, and error handling.`,
            show: false,
        },
        {
            id: 2,
            src: reactCertificate,
            title: "React certificate",
            details: ` 
 - Core basics: How React works, building components with 
React & building UIs with React;
 - Components: build applications using a component-based 
architecture, where each component is a self-contained piece of 
code that can be reused throughout the application;
 - State management: built-in state management system, 
which allows developers to manage the state of their components 
in a centralized and efficient way;
 - Hooks: functions that allow developers to use state and other 
React features in functional components, rather than 
having to use class components;
 - Sending Http requests & handling transitional states + 
responses;
 - Handling forms and user input, incl. validation;
 - Routing with React Router;
 - Combining React with TypeScript.`,
            show: false,
        }
    ];

    const [showDetails, setShowDetails] = useState(certificatedetails);

    const detailsHandler = (index) => {
        console.log("1");
        const showHide = [...showDetails];
        if(showDetails[index].show === false) {
            console.log("2");
           showHide[index].show = true;
           setShowDetails(showHide);
           console.log("show", showDetails[index].show);
            } else if(showDetails[index].show === true) {
                console.log("3");
                showHide[index].show = false;
                setShowDetails(showHide);
                console.log("show", showDetails[index].show);
            } 
        };

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Certificates 2022- 2023</h1>
            <div className={classes.wrapper}>
                {
                    certificatedetails.map((element, index) => 
                <div className={classes.certificate} key={index}>
                <img className={classes.zoom} src={element.src} width="90%"/>
                <h3>{element.title}</h3>
                <button className={classes.btnDetails} onClick={() => detailsHandler(index)}>View details</button>
                <pre className={`${classes.details} ${showDetails[index].show ? classes.details : classes.hidden}`} >
                    {element.details}
                </pre>
            </div>
                    )
                }
        </div>
        </div>
    );
};

export default Certificates;