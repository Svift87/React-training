import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addAuthAC, toggleFetchingAC } from '../../Redux/authReducer';
import Header from './Header';
import s from './Header.module.css'

class HeaderContainer extends React.Component  {
    constructor (props) {
        super(props)
    }
    componentDidMount() {
        this.props.toggleFetchingAC(true)
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {    
                this.props.toggleFetchingAC(false)
                if (response.data.resultCode === 0) {
                    
                    let {id, login, email} = response.data.data
                    
                    this.props.addAuthAC(id, email, login)
                }
            })
    }
    render () {
        return <Header login={this.props.login} isAuth={this.props.isAuth} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {addAuthAC, toggleFetchingAC})(HeaderContainer)