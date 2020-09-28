import React from 'react';
import User from './User/User';
import Axios from 'axios';

class UsersApiComponents extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.toggleFetching(true)
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.sizePage}`)
            .then(response => {                
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items)
                this.props.totalUser(response.data.totalCount)
            })
    }
    componentDidUpdate() {

    }
    onPageChanged = (el) => {
        this.props.toggleFetching(true)
        this.props.setCurrentPage(el)
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.sizePage}`)
            .then(response => {          
                this.props.toggleFetching(false)      
                this.props.setUsers(response.data.items)
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
                />
    }
}

export default UsersApiComponents