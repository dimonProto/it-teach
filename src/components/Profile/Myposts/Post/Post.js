import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return(
        <div className={classes.postGroup}>
            <div  className={classes.item}>
                <img src="https://static.thenounproject.com/png/2366460-200.png" alt={props.alt}/>
                <span >{props.message}</span>
            </div>
            <span className={classes.likeBlock}>Like: {props.like}</span>
        </div>
    )
}

export default Post;