import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className="content__banner">
                <img src={props.profileInfoData.banner} />
            </div>
            <div className="content__info">
                <div className="content__info__avatar">
                    <img src={props.profileInfoData.avatar} />
                </div>
                <div className="content__info__description">
                    <h2 className="content__info__description--name">
                        {props.profileInfoData.name}
                    </h2>
                    <p className="content__info__description--date">
                        Date of Birth: {props.profileInfoData.birthday}                    
                    </p>
                    <p className="content__info__description--city">
                        Cyty: {props.profileInfoData.city}                    
                    </p>
                    <p className="content__info__description--site">
                        Web Site: {props.profileInfoData.webSite}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo