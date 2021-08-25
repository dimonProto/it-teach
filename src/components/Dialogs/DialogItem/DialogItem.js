import React from "react"
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <img src="https://static.thenounproject.com/png/2366460-200.png" alt="img"/>
            <NavLink to ={"/dialog/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;