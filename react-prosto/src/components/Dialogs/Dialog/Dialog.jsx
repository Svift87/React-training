import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={s.dialogs__item} activeClassName={s.active}>
            {props.name}
        </NavLink>
    )
}

export default Dialog