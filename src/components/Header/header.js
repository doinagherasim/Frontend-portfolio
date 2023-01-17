import classes from "./header.module.css";
import gmail from "../../assets/gmail.png";

function Header(){
    return(
      <div className={classes.header}>
            <div className={classes.contact}>
              <img className={classes.contactImg} src={gmail} width="40" height="40"/>
              <a href="mailto:gherasimdoina93@gmail.com" className={classes.mail}> gherasimdoina93@gmail.com</a>
            </div>
            <div className={classes.menu}>
                <ul className={classes.menu_ul}>
                    <li>About me</li>
                    <li>Resources</li>
                    <li><a className={classes.link} href="/certificates"> Certificates</a></li>
                    <li><a className={classes.link} href="/allprojects"> All projects</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;