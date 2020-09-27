import React from 'react';
import s from './Users.module.css'
import User from './User/User';
import Axios from 'axios';
import userPhoto from '../../img/noavatar.png'

class Users extends React.Component {
    constructor(props) {
        super(props);        
    }
    componentDidMount() {
        Axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsersAC(response.data.items)
            })
    }
    componentDidUpdate() {
        
    }
    render() {
        return (
            <div className={s.content}>
                {
                    this.props.users.map(el => <div className={s.container} key={el.id} >
                        <div className={s.img_container}>
                            <img src={el.photos.small != null
                                ? el.photos.small
                                : userPhoto} alt="" />
                            {el.followed
                                ? <button onClick={() => { this.props.unfollowAC(el.id) }} > Follow </button>
                                : <button onClick={() => { this.props.followAC(el.id) }} >Unfollow</button>}
                        </div>
                        <div className={s.data}>
                            <div className={s.data_info_container}>
                                <div className={s.data_info}> {el.name} </div>
                                <div className={s.data_info_location_container}>
                                    {/* <div className={s.data_info_location}> {el.location.country} </div>
                                    <div className={s.data_info_location}> {el.location.city} </div> */}
                                </div>
                            </div>
                            <div className={s.data_status}> {el.status} </div>
                        </div>
                    </div>
                    )
                }
                <button onClick={this.props.setUsersAC} >Show more</button>
            </div>
        )
    }
}

export default Users