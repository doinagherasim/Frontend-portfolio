import React from "react";
import { useState } from "react";
import classes from "./ToDoList.module.css";

function ToDoList () {
// default values for tasks

    const [tasks, setTasks] = useState([
{
    id: 0,
    title: "Read 5 pages",
    complete: true
},
    {id: 1,
        title: "Read 3 pages",
        complete: false 
},
    {id: 2,
        title: "Read 2 pages",
        complete: false 
}
    ]);

    // input field, add new task to the others
    const addItem = (e) => {
        e.preventDefault();
        const newTask = {
            id: e.target.item.index,
            title: e.target.item.value,
            complete: false
        };

        setTasks([...tasks, newTask]);
    };

    // defining complete line through


    return (
        <div className={classes.container}>
            <div className={classes.todo_wrap}>
                <h2 className={classes.title}><i>TO DO LIST (0)</i></h2>
                <div className={classes.tasks}>
                    {
                        tasks.map((item, index)=>
                            <div className={classes.task} key={index} index={index}>
                                <p className={`${classes.text} ${item.complete ? "classes.length"}`} >{item.title}</p>
                                <button className={`${classes.btn} ${classes.btn_complete}`}>Complete</button>
                                <button className={`${classes.btn} ${classes.btn_X}`}>X</button>
                            </div>
                        )
                    }
                </div>
                <form onSubmit={addItem} className={classes.input}>
                    <input type="text" name="item" id="index" placeholder="Add a new task"/>
                    <button type="submit" className={`${classes.btn} ${classes.btn_add}`}>Add</button>
                </form>
            </div>
        </div>
    );
}

export default ToDoList;