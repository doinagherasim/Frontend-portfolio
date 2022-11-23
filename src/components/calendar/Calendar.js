import calendar from '../../assets/calendar.png'
import classes from './calendar.module.css'

function CalendarDay() {
    const today = new Date()
    console.log(today)
    return (
        <div>
            <button className={classes.btn}><img className={classes.calendar} src={calendar} width="110" height="70" alt="calendar"></img>
                <p className={classes.day}>{today.getDate()}</p>
            </button>
        </div>
    )
};

export default CalendarDay;