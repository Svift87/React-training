import React from 'react';
import s from './Users.module.css'
import User from './User/User';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://b1.filmpro.ru/c/17488.700xp.jpg',
                fullName: 'Dmitriy',
                status: 'I`m boss',
                location: {
                    city: 'Novosibirsk',
                    country: 'Russia'
                },
                followed: true
            },
            {
                id: 2,
                photoUrl: 'https://b1.filmpro.ru/c/17488.700xp.jpg',
                fullName: 'Kostya',
                status: 'I`m crayzi',
                location: {
                    city: 'Novosibirsk',
                    country: 'Russia'
                },
                followed: true
            },
            {
                id: 3,
                photoUrl: 'https://b1.filmpro.ru/c/17488.700xp.jpg',
                fullName: 'Andrew',
                status: 'Super man',
                location: {
                    city: 'Novosibirsk',
                    country: 'Russia'
                },
                followed: false
            },
        ])
    }
    

    return (
        <div className={s.content}>
            {
                props.users.map(el => <div className={s.container} key={el.id} >
                    <div className={s.img_container}>
                        <img src={el.photoUrl} alt=""/>
                        { el.followed 
                            ? <button onClick={ () => { props.unfollowAC(el.id) } } > Follow </button> 
                            : <button onClick={ () => { props.followAC(el.id) } } >Unfollow</button> }
                    </div>
                    <div className={s.data}>
                        <div className={s.data_info_container}>
                            <div className={s.data_info}> {el.fullName} </div>
                            <div className={s.data_info_location_container}>
                                <div className={s.data_info_location}> {el.location.country} </div>
                                <div className={s.data_info_location}> {el.location.city} </div>
                            </div>
                        </div>
                        <div className={s.data_status}> {el.status} </div>
                    </div>
                </div>
                )
            }
            <button onClick={props.setUsersAC} >Show more</button>
        </div>
    )
}

export default Users