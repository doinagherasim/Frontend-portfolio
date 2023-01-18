import classes from "./header.module.css";
import gmail from "../../assets/gmail.png";
import number from "../../assets/number.png";

function Header(){
    return(
      <div className={classes.header}>

        <div className={classes.contact}>
              <img className={classes.contactImg} src={gmail} width="25" height="25"/>
              <a href="mailto:gherasimdoina93@gmail.com" className={classes.mail}> gherasimdoina93@gmail.com</a>
              <p className={classes.number}>0733121450</p>
              <img className={classes.numberImg} src={number} width="20" height="20"/>
             
        </div>

            <div className={classes.menu}>
                <ul className={classes.menu_ul}>
                <li><a className={classes.link} href="/">Home</a></li>
                    <li>About me</li>
                    <li><a className={classes.link} href="/certificates"> Certificates</a></li>
                    <li><a className={classes.link} href="/allprojects/small_projects"> All projects</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;