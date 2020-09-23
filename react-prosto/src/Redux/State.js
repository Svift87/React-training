import messageReducer from './messageReducer'
import profileReducer from './profileReducer'

const ADD_TEXT = 'ADD-TEXT'
const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "Hi, how are you?", like: 10 },
                { id: 2, message: "It`s my first post", like: 15 },
            ],
            profileInfoData: {
                id: 1,
                banner: 'https://best-quote.ru/wp-content/uploads/2019/01/rossiya_harkov_park_vecher_lavochka_879_1600x900-e1549035496929.jpg',
                avatar: 'https://static.mk.ru/upload/entities/2020/08/13/17/articles/detailPicture/9d/5d/76/5a/4991c61486bc262f5d90dc64fc67cec9.jpg',
                name: 'Sergey K',
                birthday: '22 juanvar',
                city: 'Novosibirsk',
                webSite: 'pokanet'
            },
            textInPost: ''
        },
        messagesPage: {
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
        },
    },
    _callSubscriber() { },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // Наблюдатель (паттерн)
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state);
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const addTextCreator = (text) => ({ type: ADD_TEXT, text })
export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const addMessageTextCreator = (text) => ({ type: ADD_MESSAGE_TEXT, text })

export default store
window.store = store