import React from 'react'
import MyPost from './Myposts/MyPost'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./Myposts/MyPostContainer";

const Profile = (props) => {

    return(
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store} />
        </div>
    )
}

export default Profile;