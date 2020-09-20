import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {

    return (
        <div className={s.content}>
            <ProfileInfo 
                banner='https://best-quote.ru/wp-content/uploads/2019/01/rossiya_harkov_park_vecher_lavochka_879_1600x900-e1549035496929.jpg'
                avatar='https://static.mk.ru/upload/entities/2020/08/13/17/articles/detailPicture/9d/5d/76/5a/4991c61486bc262f5d90dc64fc67cec9.jpg' 
                name='Sergey K'
                birthday='22 juanvar'
                city='Novosibirsk'
                webSite='pokanet'
            />
            <MyPosts />
        </div>
    )
}

export default Profile