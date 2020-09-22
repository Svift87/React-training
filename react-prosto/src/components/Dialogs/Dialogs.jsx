import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {addMessageCreator, addMessageTextCreator} from '../../Redux/State'

const Dialogs = (props) => {
    let dialog = props.data.dialogsData.map((el) => (
        <Dialog name={el.name} id={el.id} />
    ));

    let messages = props.data.messagesData.map((el) => (
        <Messages message={el.message} />
    ));

    let message = React.createRef()

    let addMessage = () => { 
        props.dispatch(addMessageCreator())
    };

    let addTextMessage = () => {
        let text = message.current.value;
        props.dispatch(addMessageTextCreator(text))
    }
    return (
        <div className={s.content}>
            <div className={s.dialogs__container}>
                <div className={s.dialogs}>{dialog}</div>
                <div className={s.messages}>
                    {messages}
                    <div className={s.message__textContainer}>
                        <textarea 
                            className={s.message__textTexteria}
                            onChange={addTextMessage} 
                            ref={message} 
                            value={props.data.newMessage}
                            placeholder='Введите сообщение'
                        ></textarea>
                        <button 
                            onClick={addMessage} 
                            className={s.message__textButton}
                        >
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
