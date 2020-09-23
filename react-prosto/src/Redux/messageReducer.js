const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT'

export const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE_TEXT:
            state.newMessage = action.text;   

            return state;
        case ADD_MESSAGE:
            let newTextMessage = {
                id: 5,
                message: state.newMessage
            }
            state.messagesData.push(newTextMessage);
            state.newMessage = '';

            return state;
        default:
            return state;
    }
}

export default messageReducer