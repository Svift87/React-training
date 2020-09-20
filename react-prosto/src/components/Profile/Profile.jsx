import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
console.log(props)
    return (
        <div className={s.content}>
            <ProfileInfo profileInfoData={props.data.profileInfoData}/>
            <MyPosts postData={props.data.postData} />
        </div>
    )
}

export default Profile