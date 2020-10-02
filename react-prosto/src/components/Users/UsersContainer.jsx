import React from 'react';
import User from './User/User';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, getUsers } from '../../Redux/usersReducer';
import { usersAPI } from '../../api/api';

class UsersApiComponents extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.sizePage)
    }
    componentDidUpdate() {

    }
    onPageChanged = (el) => {
        this.props.setCurrentPage(el);

        this.props.getUsers(el, this.props.sizePage)
    }
    render() {
        return <User
            totalUserCount={this.props.totalUserCount}
            sizePage={this.props.sizePage}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            isFatching={this.props.isFatching}
            followingInProgress={this.props.followingInProgress}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        sizePage: state.usersPage.sizePage,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFatching: state.usersPage.isFatching,
        followingInProgress: state.usersPage.followingInProgress
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
    setCurrentPage,
    getUsers
})(UsersApiComponents)