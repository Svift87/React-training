import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage.profileInfoData
    }
}

let mapDispatchToProps = () => {
    return {
        
    }
}

const ProfileInfoConteiner = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default ProfileInfoConteiner