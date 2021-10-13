import React from 'react'
import classes from './Friends.module.css';

const Friends = (props) => {


    return (
      <div className={classes.friendsGroup}>
          <img className={classes.friendsImg} src="https://static.thenounproject.com/png/2366460-200.png"  alt={props.alt}/>

          <div>{props.name}</div>
      </div>
    )
}

export default Friends;