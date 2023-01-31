import { useState } from "react";
import classes from "./header.module.css";
import gmail from "../../assets/gmail.png";
import number from "../../assets/number.png";
import linkedin from "../../assets/linkedin.png";
import git from "../../assets/git.png";
import menu from "../../assets/menu.png";
import react from "react";

function Header(){
    const [close, setClose] = useState(false);
    const closeHandler = () => {
        setClose(false);
    };
    const showMenu = () => {
        setClose(true);
    };

    return(
      <div className={classes.header}>
        <div className={classes.menuWrap}>
            <img className={classes.menuBtn} src={menu} width="40" height="40" onClick={showMenu}/>
            <p className={classes.menuText}>Menu</p>
            </div>    
            <div className={`${classes.menuList} ${close ? classes.menuList : classes.hidden}`}>
                <button className={classes.close} onClick={closeHandler}>Close x</button>
                    <button className={classes.linkM}><a href="/"><span className={classes.menuLink}>Home</span></a></button>
                    <button className={classes.linkM}><a href="/certificates"><span className={classes.menuLink}>Certificates</span></a></button>
                    <button className={classes.linkM}><a href="/allprojects/small_projects"><span className={classes.menuLink}>All projects</span></a></button>
                    <button className={classes.linkM}><a href="/allprojects/small_projects"><span className={classes.menuLink}>Contacts</span></a></button>
            </div>

        <div className={classes.contact}>
              <img className={classes.contactImg} src={gmail} width="25" height="25"/>
              <a href="mailto:gherasimdoina93@gmail.com" className={classes.mail}> gherasimdoina93@gmail.com</a>
              <p className={classes.number}>+40-733-121-450</p>
              <img className={classes.numberImg} src={number} width="20" height="20"/>
              <a href="https://www.linkedin.com/in/gherasimdoina/" target="_blank"> 
              <img className={classes.linkin} src={linkedin} width="15" height="15"/></a>
              <a href="https://github.com/doinagherasim" target="_blank"> 
              <img className={classes.git} src={git} width="15" height="15"/></a> 
        </div>

            <div className={classes.menu}>
                <ul className={classes.menu_ul}>
                <li><a className={classes.link} href="/">Home</a></li>
                    <li><a className={classes.link} href="/certificates"> Certificates</a></li>
                    <li><a className={classes.link} href="/allprojects/small_projects"> All projects</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;