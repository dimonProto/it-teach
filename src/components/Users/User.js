import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/icons.png";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div>
                    <div>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="sd"
                                     className={classes.photo}/>

                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => unfollow(user.id)}>
                                    Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => follow(user.id)}>
                                    Follow</button>
                            }
                        </div>
                    </div>
                <span>
                    <span>
                        <div> {user.name} </div>
                        <div> {user.status} </div>
                    </span>
                    <span>
                        <div> {'u.location.country'} </div>
                        <div> {'u.location.city'} </div>
                    </span>
                </span>
            </div>
        </div>
    )}

export default User