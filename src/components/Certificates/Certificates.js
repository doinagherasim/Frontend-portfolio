import classes from "./certificates.module.css";
import htmlCertificate from "../../assets/HTMLCSS.png";
import jsCertificate from "../../assets/jsCertificate.png";
import reactCertificate from "../../assets/reactCertificate.png";
import Header from "../Header/header";

function Certificates(){
    return (
        <div className={classes.container}>
            <Header/>
            <h1 className={classes.title}>Certificates 2022- 2023</h1>
            <div className={classes.wrapper}>
            <div className={classes.certificate}>
                <img className={classes.zoom} src={htmlCertificate} width="90%"/>
                <h3>HTML and CSS certificate</h3>
                <button className={classes.btnDetails}>View details</button>
            </div>
            <div className={classes.certificate}>
                <img className={classes.zoom} src={jsCertificate} width="90%"/>
                <h3>JavaScript certificate</h3>
                <button className={classes.btnDetails}>View details</button>
            </div>
            <div className={classes.certificate}>
                <img className={classes.zoom} src={reactCertificate} width="90%"/>
                <h3>React certificate</h3>
                <button className={classes.btnDetails}>View details</button>
            </div>
            </div>
        </div>

    );
};

export default Certificates;