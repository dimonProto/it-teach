import React from 'react'
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {setBestFriends} from "../../redux/navReducer";

const Nav = (props) => {

     let friendsList = props.navPage.friends.map( f => <Friends key={f.id} name = { f.name}/>)

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
                    <NavLink to='/users' activeClassName ={classes.active}>User</NavLink>
                </div>
            </div>

            <div className={classes.friends}>
                {friendsList}
            </div>

        </nav>
    )
}

export default Nav;