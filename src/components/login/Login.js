import classes from './login.module.css'
import catImg1 from '../../assets/catImg1.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FeedTheCat from '../feedApp/feedTheCat';

function Login() {
    const [user1, setUser1] = useState('Tiberiu');
    const [user2, setUser2] = useState('Doina');

    let navigate = useNavigate();

    const foodAppTiberiu = () => {
        navigate("/feedthecat/Tiberiu");
        setUser1('Tiberiu');
        console.log(user1);
    }
    const foodAppDoina = () => {
        navigate("/feedthecat/Doina");
        setUser2('Doina')
        console.log(user2);
    }

    return <div>
        <Routes>
            <Route path='/feedthecat' exact element={<FeedTheCat />} />
        </Routes >
        <div className={classes.div_wrapper}>
            <h1 className={classes.yam}> Yammy!</h1>
            <img className={classes.img1} src={catImg1} width="150" height="113" alt="cat1"></img>
            <p className={classes.p}>... who is feeding me now?</p>
            <button className={classes.btn_left} onClick={foodAppTiberiu} user={'Tiberiu'}>Tiberiu</button>
            <button className={classes.btn_right} onClick={foodAppDoina} user={'Doina'}>Doina</button>
        </div>
    </div >
};

export default Login;