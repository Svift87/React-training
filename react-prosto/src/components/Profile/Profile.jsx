import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoConteiner from './ProfileInfo/ProfileInfoConteiner';

const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfoConteiner />
            <MyPostsContainer />
        </div>
    )
}

export default Profile