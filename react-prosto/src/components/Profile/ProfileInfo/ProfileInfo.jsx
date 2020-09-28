import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div>
            <div className="content__banner">
                <img src={props.profile.photos.large} />
            </div>
            <div className="content__info">
                <div className="content__info__avatar">
                    <img src={props.profile.photos.small} />
                </div>
                <div className="content__info__description">
                    <h2 className="content__info__description--name">
                        {props.profile.fullName}
                    </h2>
                    <p className="content__info__description--site">
                        About me: {props.profile.aboutMe}
                    </p>
                    <p className="content__info__description--site">
                        Web Site: {props.profile.contacts.vk}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo