import React from 'react'
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Nav = (props) => {

    let friendsList = props.navPage.friends.map( f => <Friends name = { f.name}/>)

    return (
        <nav className={classes.nav}>
            <div className={classes.topNav}>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName ={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialog' activeClassName ={classes.active}>Content</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news' activeClassName ={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings' activeClassName ={classes.active}>Settings</NavLink>
                </div>
            </div>

            <div className={classes.friends}>
                {friendsList}
            </div>

        </nav>
    )
}

export default Nav;