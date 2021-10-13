import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./Myposts/MyPostContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {


    return(
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer  />
        </div>
    )
}

export default Profile;