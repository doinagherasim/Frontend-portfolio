import classes from "./contact.module.css";
import gmail from "../../assets/gmail.png";
import number from "../../assets/number.png";
import linkedin from "../../assets/linkedin.png";
import git from "../../assets/git.png";
import eu from "../../assets/eu.png";

function Contact() {

  return (    
    <div>
       <div className={classes.containerContact}>
        <div className={classes.container_center}>
          <div className={classes.center}>
              <div className={classes.contact}>
              <h2 className={classes.name}>CONTACT ME</h2>
                <img className={classes.contactImg} src={gmail} width="45" height="45"/>
                <a href="mailto:gherasimdoina93@gmail.com" className={classes.mail}> gherasimdoina93@gmail.com</a>
                <img className={classes.numberImg} src={number} width="45" height="45"/>
                <p className={classes.number}>+40-733-121-450</p>
                <a href="https://www.linkedin.com/in/gherasimdoina/" target="_blank"> 
                <img className={classes.linkin} src={linkedin} width="40" height="40"/></a>
                <a href="https://github.com/doinagherasim" target="_blank"> 
                <img className={classes.git} src={git} width="45" height="45"/></a> 
                <a href="https://drive.google.com/file/d/1H9gr592Lbx7CYvYStQsvSDUd6Zu-1-nN/view?usp=share_link" target="_blank" download>
                  <button className={classes.download}>Download CV</button></a>
                <img className={classes.meImg} src={eu} width="300" height="300"/>
              </div>
          </div>
        </div>
        <div className={classes.copyright}>
            <p className={classes.rights}>© 2023 Doina Gherasim. All rights reserved.</p>
        </div>

    </div>
    </div>
  );
};

export default Contact;