import React from 'react';
import User from './User/User';
import Axios from 'axios';

class UsersApiComponents extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.sizePage}`)
            .then(response => {                
                this.props.setUsersAC(response.data.items)
                this.props.totalUserAC(response.data.totalCount)
            })
    }
    componentDidUpdate() {

    }
    onPageChanged = (el) => {
        this.props.setCurrentPageAC(el)
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.sizePage}`)
            .then(response => {                
                this.props.setUsersAC(response.data.items)
            })
    }
    render() {
        return <User
                    totalUserCount={this.props.totalUserCount} 
                    sizePage={this.props.sizePage} 
                    currentPage={this.props.currentPage} 
                    onPageChanged={this.onPageChanged}
                    unfollowAC={this.props.unfollowAC}
                    followAC={this.props.followAC}
                    setUsersAC={this.props.setUsersAC}
                    users={this.props.users}
                />
    }
}

export default UsersApiComponents