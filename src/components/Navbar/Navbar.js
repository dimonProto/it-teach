import React from 'react'
import classes from './Navbar.module.css';

const Nav = () =>{
    return (
      <nav className={classes.nav}>
        <div className={classes.item}>
          <a>Profile</a> 
        </div>
        <div className={classes.item}>
            <a >Profile</a> 
        </div>
        <div className={classes.item}>
          <a >Profile</a> 
        </div>
        <div className={classes.item}>
          <a >Profile</a> 
        </div>
     </nav>
    )
}

export default Nav;