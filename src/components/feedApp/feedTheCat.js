import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Calendar from '../calendar/Calendar'
import AlertModal from '../alertModal/alertModal'
import classes from './feedTheCat.module.css'
import cat from '../../assets/cat.png'
import milk from '../../assets/milk.png'
import meat from '../../assets/meat.png'
import food1 from '../../assets/food1.png'
import bground from '../../assets/bground.png'
import bag from '../../assets/bag.png'
import cat_bag from '../../assets/cat_bag.png'
import spy_cat from '../../assets/spy_cat.png'
import shelf2 from '../../assets/shelf2.png'
import cat_above from '../../assets/cat_above.png'
import cat_lie from '../../assets/cat_lie.png'
import cat_back from '../../assets/cat_back.png'
import extra_cats from '../../assets/extra_cats.png'
import done from '../../assets/done.png'
import extra from '../../assets/extra.png'


function FeedTheCat(props) {
    let params = useParams();
    console.log(params.teamId);
    // Tiberiu or Doina?

    // navigation link to Home
    let navigate = useNavigate();
    const home = () => {
        navigate("/");
    }
    // Alert 
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);

    // img "done"
    const [eat1, setEat1] = useState(false);
    const [eat2, setEat2] = useState(false);
    const [eat3, setEat3] = useState(false);
    const [eat4, setEat4] = useState(false);
    const [eat5, setEat5] = useState(false);
    const [eat6, setEat6] = useState(false);
    const [eat7, setEat7] = useState(false);
    const [eat8, setEat8] = useState(false);
    const [eat9, setEat9] = useState(false);
    const [eat10, setEat10] = useState(false);

    // food counter
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);
    const [count7, setCount7] = useState(0);
    const [count8, setCount8] = useState(0);
    const [count9, setCount9] = useState(0);
    const [count10, setCount10] = useState(0);
    const count = [count1, count2, count3, count4, count5, count6, count7, count8, count9, count10]
    const totalCount = count.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // mancarea se duce in sac
    const clickHandler1 = function () {
        if (eat1) {
            setEat1(false)
            setCount1(0)
        } else {
            setEat1(true)
            setCount1(1)
        }
    }
    const clickHandler2 = function () {
        if (eat2) {
            setEat2(false)
            setCount2(0)
        } else {
            setEat2(true)
            setCount2(1)
        }
    }
    const clickHandler3 = function () {
        if (eat3) {
            setEat3(false)
            setCount3(0)
        } else {
            setEat3(true)
            setCount3(1)
        }
    }
    const clickHandler4 = function () {
        console.log('here')
        if (eat4) {
            setEat4(false)
            setCount4(0)
        } else {
            setEat4(true)
            setCount4(1)
        }
    }
    const clickHandler5 = function () {
        if (eat5) {
            setEat5(false)
            setCount5(0)
        } else {
            setEat5(true)
            setCount5(1)
        }
    }
    const clickHandler6 = function () {
        console.log('eat6', eat6)
        if (eat6) {
            setEat6(false)
            setCount6(0)
        } else {
            setEat6(true)
            setCount6(1)
        }
    }
    const clickHandler7 = function () {
        if (eat7) {
            setEat7(false)
            setCount7(0)
        } else {
            setEat7(true)
            setCount7(1)
        }
    }
    const clickHandler8 = function () {
        if (eat8) {
            setEat8(false)
            setCount8(0)
        } else {
            setEat8(true)
            setCount8(1)
        }
    }
    const clickHandler9 = function () {
        setOpen9(true);
        if (eat9) {
            setEat9(false)
            setCount9(0)
        } else {
            setEat9(true)
            setCount9(1)
        }
    }
    const clickHandler10 = function () {
        setOpen10(true);
        if (eat10) {
            setEat10(false)
            setCount10(0)
        } else {
            setEat10(true)
            setCount10(1)
        }
    }

    const resetHandler = function () {
        setEat1(false);
        setEat2(false);
        setEat3(false);
        setEat4(false);
        setEat5(false);
        setEat6(false);
        setEat7(false);
        setEat8(false);
        setEat9(false);
        setEat10(false);
        setCount1(0);
        setCount2(0);
        setCount3(0);
        setCount4(0);
        setCount5(0);
        setCount6(0);
        setCount7(0);
        setCount8(0);
        setCount9(0);
        setCount10(0);
    }

    return <div>
        <button className={classes.btn_home} onClick={home}>⏪  Home </button>
        <img className={classes.bground} src={bground} width="150" height="113" alt="bground"></img>
        <AlertModal open9={open9} />
        <AlertModal open10={open10} />
        <section className={classes.section_left}>
            <h1 className={classes.hello}>Hello{params.user}...</h1>
            <p className={classes.p1}>Would you feed the cat?</p>
            <p className={classes.p2}>Here's how much I ate today: {totalCount} / 8</p>

            <div className={classes.section_left}>
                <img className={classes.cat} src={cat} width="150" height="113" alt="cat"></img>
                <img className={classes.bag} src={bag} width="150" height="113" alt="bag"></img>
                <img className={classes.cat_bag} src={cat_bag} width="150" height="113" alt="cat_bag"></img>
                <img className={`${classes.inside} ${classes.milk_inside} ${eat1 ? "" : classes.hidden} `} src={milk} width="150" height="113" alt="milk"></img>
                <img className={`${classes.inside} ${classes.meat_inside} ${eat2 ? "" : classes.hidden} `} src={meat} width="150" height="113" alt="meat"></img>
                <img className={`${classes.inside} ${classes.food1_inside} ${eat3 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food2_inside} ${eat4 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food3_inside} ${eat5 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food4_inside} ${eat6 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food5_inside} ${eat7 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food6_inside} ${eat8 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food7_inside} ${eat9 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food8_inside} ${eat10 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
            </div>
        </section>
        <section className={classes.section_right}>
            <div className={classes.food_container}>
                <img className={classes.shelf} src={shelf2} width="150" height="113" alt="shelf"></img>
                <img className={classes.cat_above} src={cat_above} width="150" height="113" alt="cat_above"></img>
                <img className={classes.cat_back} src={cat_back} width="150" height="113" alt="cat_above"></img>
                <img className={classes.cat_lie} src={cat_lie} width="150" height="113" alt="cat_above"></img>
                <button className={classes.btn} onClick={clickHandler1}>
                    <img className={`${classes.box_shadow} ${classes.milk}`} src={milk} width="150" height="113" alt="milk"></img>
                    <img className={`${classes.done} ${classes.done_left} ${eat1 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler2}>
                    <img className={`${classes.box_shadow} ${classes.meat}`} src={meat} width="150" height="113" alt="meat"></img>
                    <img className={`${classes.done} ${classes.done_right} ${eat2 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler3}>
                    <img className={`${classes.box_shadow} ${classes.food1}`} src={food1} width="150" height="113" alt="food1"></img>
                    <img className={` ${classes.done} ${classes.done1} ${eat3 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler4}>
                    <img className={`${classes.box_shadow} ${classes.food2}`} src={food1} width="150" height="113" alt="food1"></img>
                    <img className={` ${classes.done} ${classes.done2} ${eat4 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler5}>
                    <img className={`${classes.box_shadow} ${classes.food3}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done3} ${eat5 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler6}>
                    <img className={`${classes.box_shadow} ${classes.food4}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done4} ${eat6 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler7}>
                    <img className={`${classes.box_shadow} ${classes.food5}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done5} ${eat7 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler8}>
                    <img className={`${classes.box_shadow} ${classes.food6}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done6} ${eat8 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler9}>
                    <img className={`${classes.box_shadow} ${classes.food7}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done7} ${eat9 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler10}>
                    <img className={`${classes.box_shadow} ${classes.food8}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done8} ${eat10 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <p className={classes.p_warning}>Extra food!</p>
                <img className={classes.extra_cats} src={extra_cats} width="150" height="113" alt="extra_cats"></img>
                <img className={classes.extra} src={extra} width="150" height="113" alt="extra"></img>
            </div>
        </section >
        <section className={classes.footer}>
            <img className={classes.spy_cat} src={spy_cat} width="150" height="113" alt="spy_cat"></img>
            <button className={classes.btn_reset} onClick={resetHandler}>Reset</button>
            <Calendar />
        </section>
    </div >
};
export default FeedTheCat;