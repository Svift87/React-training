import React from 'react';
import s from './User.module.css'
import userPhoto from '../../../img/noavatar.png'
import Preloader from '../../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../../api/api';

let User = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.sizePage);

    let pages = [];

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }

    if (props.currentPage <= 3) {
        for (let i = 1; i <= 6; i++) {
            pages.push(i)
        }
        pages.push(pageCount)
        pages.sort(compareNumeric);
    } else if (props.currentPage > 3 && props.currentPage < pageCount - 3) {
        pages.push(1)
        for (let i = props.currentPage; i > props.currentPage - 3; i--) {
            pages.push(i)
        }
        for (let i = props.currentPage + 1; i < props.currentPage + 3; i++) {
            pages.push(i)
        }
        pages.push(pageCount)

        pages.sort(compareNumeric);
    } else if (props.currentPage >= pageCount - 3) {
        pages.push(1)
        for (let i = pageCount; i > pageCount - 3; i--) {
            pages.push(i)
        }
        pages.sort(compareNumeric);
    }
    
    return (
        <div className={s.content}>
            { props.isFatching ? <Preloader /> : null}
            <div className={s.pagination}>
                {pages.map(el => <button className={el === props.currentPage && s.active} onClick={(e) => { props.onPageChanged(el) }} > {el} </button>)}
            </div>
            {
                props.users.map(el => <div className={s.container} key={el.id} >
                    <div className={s.img_container}>
                        <NavLink to={`/profile/${el.id}`}>
                            <img src={el.photos.small != null
                                ? el.photos.small
                                : userPhoto} alt="" />
                        </NavLink>

                        {el.followed
                            ? <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                props.disabledBtn(true, el.id)
                                followAPI.getFolow(el.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.disabledBtn(false, el.id)
                                            props.unfollow(el.id)
                                        }
                                    })
                            }} >Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === el.id)}  onClick={() => {
                                props.disabledBtn(true, el.id)
                                followAPI.getUnFolow(el.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.disabledBtn(false, el.id)
                                            props.follow(el.id)
                                        }
                                    })
                            }} > Follow </button>
                        }

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
            <button onClick={props.setUsers} >Show more</button>
        </div>
    )
}


export default User