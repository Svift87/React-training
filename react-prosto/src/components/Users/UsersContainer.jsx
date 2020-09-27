import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, totalUserAC, unfollowAC } from '../../Redux/usersReducer';
import UsersApiComponents from './UsersApiComponents';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        sizePage: state.usersPage.sizePage,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followAC: (userId) => {
            dispatch(followAC(userId))
        },
        unfollowAC: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsersAC: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPageAC: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        totalUserAC: (totalUserCount) => {
            dispatch(totalUserAC(totalUserCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponents)