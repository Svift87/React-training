import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={s.item} activeClassName={s.active}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={s.item} activeClassName={s.active}>
                    Messages
                </NavLink>    
            </div>
            <div>
                <NavLink to='/news' className={s.item} activeClassName={s.active}>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink to='/music' className={s.item} activeClassName={s.active}>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={s.item} activeClassName={s.active}>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar