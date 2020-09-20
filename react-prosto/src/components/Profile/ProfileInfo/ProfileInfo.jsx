import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className="content__banner">
                <img src={props.banner} />
            </div>
            <div className="content__info">
                <div className="content__info__avatar">
                    <img src={props.avatar} />
                </div>
                <div className="content__info__description">
                    <h2 className="content__info__description--name">
                        {props.name}
                    </h2>
                    <p className="content__info__description--date">
                        Date of Birth: {props.birthday}                    
                    </p>
                    <p className="content__info__description--city">
                        Cyty: {props.city}                    
                    </p>
                    <p className="content__info__description--site">
                        Web Site: {props.webSite}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo