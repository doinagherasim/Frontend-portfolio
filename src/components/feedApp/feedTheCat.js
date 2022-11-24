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


function FeedTheCat() {
    // Tiberiu or Doina?
    let params = useParams();

    // navigation link to Home
    let navigate = useNavigate();
    const home = () => {
        navigate("/");
    }
    // Alert 
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);

    // mancarea se duce in sac +done
    const clickHandler1 = function () {
        if (food.eat1) {
            setFood({
                ...food,
                eat1: false
            })
            setCounts({
                ...counts,
                count1: 0
            })
        } else {
            setFood({
                ...food,
                eat1: true
            })
            setCounts({
                ...counts,
                count1: 1
            })
        }
    }
    const clickHandler2 = function () {
        if (food.eat2) {
            setFood({
                ...food,
                eat2: false
            })
            setCounts({
                ...counts,
                count2: 0
            })
        } else {
            setFood({
                ...food,
                eat2: true
            })
            setCounts({
                ...counts,
                count2: 1
            })
        }
    }
    const clickHandler3 = function () {
        if (food.eat3) {
            setFood({
                ...food,
                eat3: false
            })
            setCounts({
                ...counts,
                count3: 0
            })
        } else {
            setFood({
                ...food,
                eat3: true
            })
            setCounts({
                ...counts,
                count3: 1
            })
        }
    }
    const clickHandler4 = function () {
        if (food.eat4) {
            setFood({
                eat4: false
            })
            setCounts({
                ...counts,
                count4: 0
            })
        } else {
            setFood({
                ...food,
                eat4: true
            })
            setCounts({
                ...counts,
                count4: 1
            })
        }
    }
    const clickHandler5 = function () {
        if (food.eat5) {
            setFood({
                ...food,
                eat5: false
            })
            setCounts({
                ...counts,
                count5: 0
            })
        } else {
            setFood({
                ...food,
                eat5: true
            })
            setCounts({
                ...counts,
                count5: 1
            })
        }
    }
    const clickHandler6 = function () {
        if (food.eat6) {
            setFood({
                ...food,
                eat6: false
            })
            setCounts({
                ...counts,
                count6: 0
            })
        } else {
            setFood({
                ...food,
                eat6: true
            })
            setCounts({
                ...counts,
                count6: 1
            })
        }
    }
    const clickHandler7 = function () {
        if (food.eat7) {
            setFood({
                ...food,
                eat7: false
            })
            setCounts({
                ...counts,
                count7: 0
            })
        } else {
            setFood({
                ...food,
                eat7: true
            })
            setCounts({
                ...counts,
                count7: 1
            })
        }
    }
    const clickHandler8 = function () {
        if (food.eat8) {
            setFood({
                ...food,
                eat8: false
            })
            setCounts({
                ...counts,
                count8: 0
            })
        } else {
            setFood({
                ...food,
                eat8: true
            })
            setCounts({
                ...counts,
                count8: 1
            })
        }
    }
    const clickHandler9 = function () {
        setOpen9(true);
        if (food.eat9) {
            setFood({
                ...food,
                eat9: false
            })
            setCounts({
                ...counts,
                count9: 0
            })
        } else {
            setFood({
                ...food,
                eat9: true
            })
            setCounts({
                ...counts,
                count9: 1
            })
        }
    }
    const clickHandler10 = function () {
        setOpen10(true);
        if (food.eat10) {
            setFood({
                ...food,
                eat10: false
            })
            setCounts({
                ...counts,
                count10: 0
            })
        } else {
            setFood({
                ...food,
                eat10: true
            })
            setCounts({
                ...counts,
                count10: 1
            })
        }
    }

    // varianta scurta
    const details = [
        { className: `${classes.inside} ${classes.milk_inside}`, src: milk, alt: milk },
        { className: `${classes.inside} ${classes.meat_inside}`, src: meat, alt: meat },
        { className: `${classes.inside} ${classes.food1_inside}`, src: food1, alt: food1 }
    ];

    const foodDefault = {
        eat1: false, eat2: false, eat3: false, eat4: false, eat5: false, eat6: false, eat7: false, eat8: false, eat9: false, eat10: false,
    };

    // const foodDefault_new = [
    //     { eat: false }, { eat: false }, { eat: false }, { eat: false }, { eat: false }, { eat: false }, { eat: false }, { eat: false }, { eat: false }, { eat: false }
    // ]
    // pentru done + sac
    const [food, setFood] = useState(foodDefault);

    // food counter
    const countDefault = {
        count1: 0, count2: 0, count3: 0, count4: 0, count5: 0, count6: 0, count7: 0, count8: 0, count9: 0, count10: 0
    }
    const [counts, setCounts] = useState(countDefault);

    // food counter
    const count = [counts.count1, counts.count2, counts.count3, counts.count4, counts.count5,
    counts.count6, counts.count7, counts.count8, counts.count9, counts.count10];

    const totalCount = count.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const resetHandler = function () {
        setFood(foodDefault)
        setCounts(countDefault);
    }


    return <div>
        <button className={classes.btn_home} onClick={home}>⏪  Home </button>
        <img className={classes.bground} src={bground} width="150" height="113" alt="bground"></img>
        <AlertModal open9={open9} />
        <AlertModal open10={open10} />
        <section className={classes.section_left}>
            <h1 className={classes.hello}>Hello {params.name}...</h1>
            <p className={classes.p1}>Would you feed the cat?</p>
            <p className={classes.p2}>Here's how much I ate today: {totalCount} / 8</p>

            <div className={classes.section_left}>
                <img className={classes.cat} src={cat} width="150" height="113" alt="cat"></img>
                <img className={classes.bag} src={bag} width="150" height="113" alt="bag"></img>
                <img className={classes.cat_bag} src={cat_bag} width="150" height="113" alt="cat_bag"></img>
                <img className={`${classes.inside} ${classes.milk_inside} ${food.eat1 ? "" : classes.hidden} `} src={milk} width="150" height="113" alt="milk"></img>
                <img className={`${classes.inside} ${classes.meat_inside} ${food.eat2 ? "" : classes.hidden} `} src={meat} width="150" height="113" alt="meat"></img>
                <img className={`${classes.inside} ${classes.food1_inside} ${food.eat3 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food2_inside} ${food.eat4 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food3_inside} ${food.eat5 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food4_inside} ${food.eat6 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food5_inside} ${food.eat7 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food6_inside} ${food.eat8 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food7_inside} ${food.eat9 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
                <img className={`${classes.inside} ${classes.food8_inside} ${food.eat10 ? "" : classes.hidden}`} src={food1} width="150" height="113" alt="food1"></img>
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
                    <img className={`${classes.done} ${classes.done_left} ${food.eat1 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler2}>
                    <img className={`${classes.box_shadow} ${classes.meat}`} src={meat} width="150" height="113" alt="meat"></img>
                    <img className={`${classes.done} ${classes.done_right} ${food.eat2 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler3}>
                    <img className={`${classes.box_shadow} ${classes.food1}`} src={food1} width="150" height="113" alt="food1"></img>
                    <img className={` ${classes.done} ${classes.done1} ${food.eat3 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler4}>
                    <img className={`${classes.box_shadow} ${classes.food2}`} src={food1} width="150" height="113" alt="food1"></img>
                    <img className={` ${classes.done} ${classes.done2} ${food.eat4 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler5}>
                    <img className={`${classes.box_shadow} ${classes.food3}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done3} ${food.eat5 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler6}>
                    <img className={`${classes.box_shadow} ${classes.food4}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done4} ${food.eat6 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler7}>
                    <img className={`${classes.box_shadow} ${classes.food5}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done5} ${food.eat7 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler8}>
                    <img className={`${classes.box_shadow} ${classes.food6}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done6} ${food.eat8 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler9}>
                    <img className={`${classes.box_shadow} ${classes.food7}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done7} ${food.eat9 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                </button>
                <button className={classes.btn} onClick={clickHandler10}>
                    <img className={`${classes.box_shadow} ${classes.food8}`} src={food1} width="150" height="113" alt="food2"></img>
                    <img className={` ${classes.done} ${classes.done8} ${food.eat10 ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
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