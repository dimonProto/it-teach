import React from "react";
import classes from "../../Users/Users.module.css";
import preloader from "../../../assets/images/loader.gif";


let Preloader = (props ) => {
    return (
        <div className={classes.preloader} role={'main'}>
            <img src={preloader} alt="preloader" />
        </div>
    )
}
export default Preloader