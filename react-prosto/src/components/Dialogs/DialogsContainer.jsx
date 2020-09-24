import React from "react";
import {addMessageCreator, addMessageTextCreator} from '../../Redux/messageReducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let addMessage = () => { 
        props.store.dispatch(addMessageCreator())
    };

    let addTextMessage = (text) => {
        props.store.dispatch(addMessageTextCreator(text))
    }

    return (
        <Dialogs state={state} addMessage={addMessage} addTextMessage={addTextMessage} />
    );
};

export default DialogsContainer;
