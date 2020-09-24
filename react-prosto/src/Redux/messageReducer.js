const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Nik" },
        { id: 3, name: "Sonya" },
        { id: 4, name: "Vitya" },
    ],
    messagesData: [
        { id: 1, message: "Сообщения Dima" },
        { id: 2, message: "Сообщения Nik" },
        { id: 3, message: "Сообщения Sonya" },
        { id: 4, message: "Сообщения Vitya" },
    ],
    newMessage: ''
}

export const messageReducer = (state = initialState, action) => {
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

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const addMessageTextCreator = (text) => ({ type: ADD_MESSAGE_TEXT, text })

export default messageReducer