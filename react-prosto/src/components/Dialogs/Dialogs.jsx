import React from 'react';
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
    
    let dialog = props.data.dialogsData.map( el => <Dialog name={el.name} id={el.id} /> )    

    let messages = props.data.messagesData.map( el => <Messages message={el.message} /> )

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