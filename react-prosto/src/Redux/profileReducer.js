const ADD_TEXT = 'ADD-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            state.textInPost = action.text;      

            return state;
        case ADD_POST:
            let post = {
                id: 3,
                message: state.textInPost,
                like: 0
            }
            state.postData.push(post);
            state.textInPost = '';
            
            return state;
        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const addTextCreator = (text) => ({ type: ADD_TEXT, text })

export default profileReducer