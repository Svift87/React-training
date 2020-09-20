import React from 'react';
import s from './Messages.module.css'
import { BrowserRouter, Route } from 'react-router-dom';

const Messages = (props) => {
    return (
        <div className={s.message__item}>{props.message}</div>
    )
}

export default Messages