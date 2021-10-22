import React from 'react'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/icons.png";
import classes from './ProfileInfo.module.scss'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return(
        <div>

            <div className={classes.cardBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt={props.alt}/>
                <div>

                    <p className={classes.cardName}>{props.profile.fullName ? props.profile.fullName : 'не указано'}</p>
                    <p className={classes.cardName}>{props.profile.aboutMe ? props.profile.aboutMe : 'не указано'}</p>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;