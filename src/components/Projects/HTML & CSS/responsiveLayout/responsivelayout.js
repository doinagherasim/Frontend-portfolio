import { useNavigate } from "react-router-dom";
import classes from "./responsivelayout.module.css"; 
import GTD from "../../../../assets/GTD.png";

function ResponsiveLayout() {
    let navigateHome = useNavigate();
    const home = () => {
        navigateHome("/");
    };

    return (
        <div className={classes.container}>
            <div className={classes.home}><button className={classes.btn_home} onClick={home}>  BACK </button></div>
            <h1 className={classes.h1}>Getting Things Done: The Ultimate Guide to Personal Productivity</h1>
            <div className={classes.wrap}><img className={classes.image} src={GTD} alt="gtd"></img></div>
            <div className={classes.column}>
                <div className={`${classes.col1}`}>
                    <h2>What is GTD?</h2>
                    <p>Our minds are phenomenal at coming up with new ideas. But not so good at 
                    remembering them. The biggest shift for people new to Getting Things Done 
                    is admitting that they rely too much on their brain to do something that 
                    it isn’t designed to do. Step one of GTD is: 
                    <ul>
                        <li>✔️ Write down everything</li>
                        <li>✔️ Set up your inboxes</li>
                    </ul></p>
                </div>
                <div className={`${classes.col2}`}>
                    <h2>Benefits of Getting Things Done</h2>
                    <p>Getting Things Done is like having your own personal operating system. 
                    Everything you do improves when GTD is running in the background.</p>
                    <p>
                    <span>Reliability. </span>
                    Having a system like Getting Things Done
                    helps. When you learn GTD, you stop trying to juggle everything in your head and 
                    instead rely on tools and habits to keep track of important information. </p>
                    <p>
                    <span> Focus </span>
                    sometimes feels like a superpower that some people just have and others don’t. 
                    That may be true to some degree. But overall, I believe that focus is a learned skill 
                    that anyone can improve. Getting Things Done gives you the tools to become a more 
                    focused person. Instead of feeling overwhelmed, GTD helps you organize and prioritize
                    your tasks so that you can feel good about tackling one at a time.</p>
                    <p>
                    <span> Creativity. </span>
                    My favorite perk of GTD is the noticeable increase in creativity. Once I started 
                    Getting Things Done, I got much better at saving and organizing things that inspired me.
                    This in turn gave me more material to draw from whenever I sat down to write. But you 
                    don’t have to be a writer to benefit from being more creative. The combination of new 
                    insights is what leads to new business opportunities, better strategy, and higher quality 
                    output no matter what field you work in.</p>
                </div>
                <div className={` ${classes.col3}`}>
                    <p>Five steps of GTD: 
                    <ul>
                        <li>✔️ Capture everything that has your attention</li>
                        <li>✔️ Clarify what needs to be done</li>
                        <li>✔️ Organize information so that you can find it later</li>
                        <li>✔️ Reflect and prioritize your work</li>
                        <li>✔️ Engage in the right activities</li>
                    </ul></p>
                </div>
                </div>
                <div className={classes.column}>
               <div className={` ${classes.col4}`}>
                <h2>Who should read this?</h2>
                <p>This guide is for:
                Overwhelmed knowledge workers who feel like they have too much on their plate. 
                Getting Things Done will help you get back into a state of relaxed control. Young 
                professionals who want to get ahead and stand out. </p>
                <p> Learning the effective habits of GTD now will set you up for future success. I’ve 
                personally benefited greatly since first learning GTD in 2016. In addition to increased 
                reliability, focus, and creativity, Getting things Done has helped me be more intentional 
                about how I spend my time. But don’t take my word for it. The fact is, Getting Things Done is widely regarded as the de-facto 
                operating system for people who want to be a top performer. In his book The Great CEO 
                Within, author Matt Mochary attests,<span>“The majority of successful CEOs that I know use 
                the system outlined in the book Getting Things Done.”</span></p>
              </div>
               <div className={`${classes.col5}`}>
                <p className={classes.quote}>"The big difference between what I do and what others do is that I capture and organize 
                100 percent of my stuff with objective tools at hand, not in my mind."</p>
                <p>DAVID ALLEN</p>
               </div>
               </div>
</div>
    );
};

export default  ResponsiveLayout;