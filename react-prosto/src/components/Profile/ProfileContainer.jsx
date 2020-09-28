import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        return (
            <Profile {...this.props} profileInfoData={this.props.profileInfoData} />
        )
    }
}

let mapStateToProps = (state) => ({
    profileInfoData: state.profilePage.profileInfoData
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)