import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../calendar/Calendar";
import AlertModal from "../alertModal/alertModal";
import classes from "./feedTheCat.module.css";
import cat from "../../assets/cat.png";
import milk from "../../assets/milk.png";
import meat from "../../assets/meat.png";
import food1 from "../../assets/food1.png";
import bground from "../../assets/bground.png";
import bag from "../../assets/bag.png";
import cat_bag from "../../assets/cat_bag.png";
import spy_cat from "../../assets/spy_cat.png";
import shelf2 from "../../assets/shelf2.png";
import cat_above from "../../assets/cat_above.png";
import cat_lie from "../../assets/cat_lie.png";
import cat_back from "../../assets/cat_back.png";
import extra_cats from "../../assets/extra_cats.png";
import done from "../../assets/done.png";
import extra from "../../assets/extra.png";


function FeedTheCat() {
    // Tiberiu or Doina?
    let params = useParams();
    // navigation link to Home
    let navigateHome = useNavigate();
    const home = () => {
        navigateHome("/");
    };

    // food track
    // food default
    const foodDefault = [
        { id: 1, theCatAte: false }, { id: 2, theCatAte: false }, { id: 3, theCatAte: false}, 
        { id: 4, theCatAte: false }, { id: 5, theCatAte: false}, { id: 6, theCatAte: false }, 
        { id: 7, theCatAte: false }, { id: 8, theCatAte: false }, { id: 9, theCatAte: false}, 
        { id: 10, theCatAte: false}
    ];
    
    const [foods, setFoods] = useState(foodDefault);
    // food counter
    const totalFoodCount = foods.reduce(function (sum, food) {
        if (food.theCatAte === true) {
            return sum + 1;
        }
        else {
            return sum;
        };
    }, 0);


    // Alert 
    const [alertFood, setAlertFood]=useState(false);
    // count for first 8 services
    const totalFoodCountWithoutAlerts = foods.reduce(function (sum, food, index) {
        if (food.theCatAte === true && (index < 8)) {
            return sum + 1;
        }
        else {
            return sum;
        };
    }, 0);

    const onClickFood  = function (index) {
        // alert if first 8 are not checked
        if (index > 7 && totalFoodCountWithoutAlerts < 8) {
            return alert("Please check 1-8 servings first.");
        }
        // check food (done + goes in the bag)
        const newFood = [...foods];
        if (foods[index].theCatAte === true ){
            newFood[index].theCatAte = false;
        } else if (foods[index].theCatAte === false) {
            newFood[index].theCatAte = true;
        }
        // alerta OMG for extra food serving 9 and 10
        if (totalFoodCountWithoutAlerts >= 8) {
            setAlertFood(true);
        };

        setFoods(newFood);
    };

    const closeAlert = () => {
        setAlertFood(false);
    };

    const resetHandler = function () {
            setFoods(foodDefault);
        };

    // images array
    const imageGallery = [{key:0, foodInTheBag: classes.food1_inTheBag, src: milk, foodPosition: classes.food1_position, done: classes.done1},{key:1, foodInTheBag: classes.food2_inTheBag, src: meat, foodPosition: classes.food2_position, done: classes.done2}, 
    {key:2, foodInTheBag: classes.food3_inTheBag, src: food1, foodPosition: classes.food3_position, done: classes.done3}, {key:3, foodInTheBag: classes.food4_inTheBag, src: food1, foodPosition: classes.food4_position, done: classes.done4},
    {key:4, foodInTheBag: classes.food5_inTheBag, src: food1, foodPosition: classes.food5_position, done: classes.done5}, {key:5, foodInTheBag: classes.food6_inTheBag, src: food1, foodPosition: classes.food6_position, done: classes.done6},
    {key:6, foodInTheBag: classes.food7_inTheBag, src: food1, foodPosition: classes.food7_position, done: classes.done7}, {key:7, foodInTheBag: classes.food8_inTheBag, src: food1, foodPosition: classes.food8_position, done: classes.done8},
    {key:8, foodInTheBag: classes.food9_inTheBag, src: food1, foodPosition: classes.food9_position, done: classes.done9}, {key:9, foodInTheBag: classes.food10_inTheBag, src: food1, foodPosition: classes.food10_position, done: classes.done10}];

    return <div>
        <button className={classes.btn_home} onClick={home}>⏪  Home </button>
        <img className={classes.bground} src={bground} width="150" height="113" alt="bground"></img>
        <div>
        {alertFood && <AlertModal closeAlert={closeAlert} />}
        </div>
        <section className={classes.section_bag}>
            <h1 className={classes.hello}>Hello {params.name}...</h1>
            <p className={classes.p1}>Would you feed the cat?</p>
            <p className={classes.p2}>Here's how much I ate today: {totalFoodCount} / 8</p>

            <div className={classes.section_bag}>
                <img className={classes.cat} src={cat} width="150" height="113" alt="cat"></img>
                <img className={classes.bag} src={bag} width="150" height="113" alt="bag"></img>
                <img className={classes.cat_bag} src={cat_bag} width="150" height="113" alt="cat_bag"></img>
                <div>
                   {
                    imageGallery.map((element, index)=><img className={`${classes.inTheBag} ${element.foodInTheBag} ${foods[index].theCatAte ? "" : classes.hidden}`} 
                    src={element.src} width="150" height="113" alt="image"></img>)
                   };
                </div>
            </div>
        </section>
        <section className={classes.section_shelve}>
            <div className={classes.food_container}>
                <img className={classes.shelf} src={shelf2} width="150" height="113" alt="shelf"></img>
                <img className={classes.cat_above} src={cat_above} width="150" height="113" alt="cat_above"></img>
                <img className={classes.cat_back} src={cat_back} width="150" height="113" alt="cat_above"></img>
                <img className={classes.cat_lie} src={cat_lie} width="150" height="113" alt="cat_above"></img>
                <div>
                    {
                     imageGallery.map((element, index)=> 
                    <button className={classes.btn} onClick={() => onClickFood(element.key)}>
                        <img className={`${classes.box_shadow} ${element.foodPosition}`} src={element.src} width="150" height="113" alt="image"></img>
                        <img className={`${classes.done} ${element.done} ${foods[index].theCatAte ? "" : classes.hidden} `} src={done} width="150" height="113" alt="done"></img>
                    </button>)
                    }
                </div>
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
    </div >;
};
export default FeedTheCat;