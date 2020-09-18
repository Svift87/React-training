import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className="content__banner">
                <img src="https://best-quote.ru/wp-content/uploads/2019/01/rossiya_harkov_park_vecher_lavochka_879_1600x900-e1549035496929.jpg" />
            </div>
            <div className="content__info">
                <div className="content__info__avatar">
                    <img src="https://static.mk.ru/upload/entities/2020/08/13/17/articles/detailPicture/9d/5d/76/5a/4991c61486bc262f5d90dc64fc67cec9.jpg" />
                </div>
                <div className="content__info__description">
                    <h2 className="content__info__description--name">
                        Sergey K.
            			</h2>
                    <p className="content__info__description--date">
                        Date of Birth: 22 january
						</p>
                    <p className="content__info__description--city">
                        Cyty: Novosibirsk
            			</p>
                    <p className="content__info__description--site">
                        Web Site: https://novosibirsk.hh.ru/resume/08d915c2ff0579b6750039ed1f4c716e336372
            			</p>
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile