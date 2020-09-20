import React from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Messages from './Messages/Messages'

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Nik"},
        {id: 3, name: "Sonya"},
        {id: 4, name: "Vitya"},
    ]

    let dialog = dialogsData.map( el => <Dialog name={el.name} id={el.id} /> )
    
    let messagesData = [
        {id: 1, message: "Сообщения Dima"},
        {id: 2, message: "Сообщения Nik"},
        {id: 3, message: "Сообщения Sonya"},
        {id: 4, message: "Сообщения Vitya"},
    ]

    let messages = messagesData.map( el => <Messages message={el.message} /> )

    return (
        <div className={s.content}>
            <div className={s.dialogs__container}> 
                <div className={s.dialogs}>
                    { dialog }                    
                </div>                
                <div className={s.messages}>
                    
                    { messages }
                </div>
            </div>            
        </div>
    )
}

export default Dialogs