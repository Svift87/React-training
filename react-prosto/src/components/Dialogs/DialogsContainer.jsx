import React from "react";
import { connect } from "react-redux";
import {addMessageCreator, addMessageTextCreator} from '../../Redux/messageReducer'
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        addTextMessage: (text) => {
            dispatch(addMessageTextCreator(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
