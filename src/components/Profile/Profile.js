import React from 'react'
import MyPost from './Myposts/MyPost'
import classes from './Profile.module.css'

const Profile = () => {
    return(
        <div>
            <img src="https://m.iguides.ru/upload/iblock/637/6375946d9669a27030241e80ffa82b93.jpg"/>
            <MyPost/>

        </div>
    )
}

export default Profile;