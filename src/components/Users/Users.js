import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/icons.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleIsFollowingProgress} from "../../redux/usersReducer";

let Users = (props) => {

    const PAGES_LENGTH = 11;
    const totalPagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pagesCount = totalPagesCount < PAGES_LENGTH ? totalPagesCount : PAGES_LENGTH;
    const half = Math.floor(pagesCount / 2);
    let startPage = props.currentPage - half;
    if (startPage < 1) startPage = 1;
    if ((startPage + pagesCount) > totalPagesCount) startPage = totalPagesCount - pagesCount;

    const pages = [];
    for (let i = startPage; i < startPage + PAGES_LENGTH; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={classes.pagination}>
                {pages.map((p) => {

                    return(
                        <span key={p} className={props.currentPage === p && classes.selectedPage}
                              onClick={ () => { props.onPageChanged(p) }}>
                            {p}
                        </span>)
                })}
            </div>

            { props.users.map(u => <div key={u.id}>

                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="sd" className={classes.photo}/>

                            </NavLink>
                        </div>
                        <div>
                            {u.followed

                                ? <button disabled={props.followingInProgress.some( id => id === u.id)}
                                          onClick={() => props.unfollow(u.id)}>
                                    Unfollow</button>
                                : <button disabled={props.followingInProgress.some( id => id === u.id)}
                                          onClick={() =>  props.follow(u.id)}>
                                    Follow</button>
                            }

                        </div>
                    </span>
                <span>
                        <span>
                            <div> {u.name} </div>
                            <div> {u.status} </div>
                        </span>
                        <span>
                            <div> {'u.location.country'} </div>
                            <div> {'u.location.city'} </div>
                        </span>
                    </span>
                <span></span>
            </div>)}
        </div>
    )
}

export default Users