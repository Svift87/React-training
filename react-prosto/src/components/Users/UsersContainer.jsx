import React from 'react';
import User from './User/User';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, totalUser, unfollow, toggleFetching, disabledBtn } from '../../Redux/usersReducer';
import { usersAPI } from '../../api/api';

class UsersApiComponents extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.sizePage)
            .then(data => {
                this.props.toggleFetching(false)
                this.props.setUsers(data.items)
                this.props.totalUser(data.totalCount)
            })
    }
    componentDidUpdate() {

    }
    onPageChanged = (el) => {
        this.props.toggleFetching(true);
        this.props.setCurrentPage(el);
        usersAPI.getUsers(el, this.props.sizePage)
            .then(data => {
                this.props.toggleFetching(false)
                this.props.setUsers(data.items)
            })
    }
    render() {
        return <User
            totalUserCount={this.props.totalUserCount}
            sizePage={this.props.sizePage}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            setUsers={this.props.setUsers}
            users={this.props.users}
            isFatching={this.props.isFatching}
            disabledBtn={this.props.disabledBtn}
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
    setUsers,
    setCurrentPage,
    totalUser,
    toggleFetching,
    disabledBtn
})(UsersApiComponents)