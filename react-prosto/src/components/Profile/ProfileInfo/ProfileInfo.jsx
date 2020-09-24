import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    let state = props.store.getState().profilePage;
    
    return (
        <div>
            <div className="content__banner">
                <img src={state.profileInfoData.banner} />
            </div>
            <div className="content__info">
                <div className="content__info__avatar">
                    <img src={state.profileInfoData.avatar} />
                </div>
                <div className="content__info__description">
                    <h2 className="content__info__description--name">
                        {state.profileInfoData.name}
                    </h2>
                    <p className="content__info__description--date">
                        Date of Birth: {state.profileInfoData.birthday}                    
                    </p>
                    <p className="content__info__description--city">
                        Cyty: {state.profileInfoData.city}                    
                    </p>
                    <p className="content__info__description--site">
                        Web Site: {state.profileInfoData.webSite}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo