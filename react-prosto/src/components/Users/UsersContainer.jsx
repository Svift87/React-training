import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, totalUser, unfollow, toggleFetching } from '../../Redux/usersReducer';
import UsersApiComponents from './UsersApiComponents';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        sizePage: state.usersPage.sizePage,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFatching: state.usersPage.isFatching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         totalUser: (totalUserCount) => {
//             dispatch(totalUser(totalUserCount))
//         },
//         toggleFetching: (isFatching) => {
//             dispatch(toggleFetching(isFatching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    totalUser,
    toggleFetching
})(UsersApiComponents)