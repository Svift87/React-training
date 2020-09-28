const ADD_TEXT = 'ADD-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postData: [
        { id: 1, message: "Hi, how are you?", like: 10 },
        { id: 2, message: "It`s my first post", like: 15 },
    ],
    profileInfoData: {
        aboutMe: "Фронтовик от бога",
        contacts: {
            facebook: null,
            github: null,
            instagram: null,
            mainLink: null,
            twitter: null,
            vk: "https://vk.com/id37741869",
            website: null,
            youtube: null
        },        
        fullName: "Sergey K",
        lookingForAJob: true,
        lookingForAJobDescription: null,
        photos: {
            large: "https://static.mk.ru/upload/entities/2020/08/13/17/articles/detailPicture/9d/5d/76/5a/4991c61486bc262f5d90dc64fc67cec9.jpg",
            small: "https://static.mk.ru/upload/entities/2020/08/13/17/articles/detailPicture/9d/5d/76/5a/4991c61486bc262f5d90dc64fc67cec9.jpg"        
        },        
        userId: 1
    },
    textInPost: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return {
                ...state,
                textInPost: action.text
            }
        case ADD_POST:
            let post = {
                id: 3,
                message: state.textInPost,
                like: 0
            }

            return {
                ...state,
                postData: [...state.postData, post],
                textInPost: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profileInfoData: action.profileInfoData
            }
        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const addTextCreator = (text) => ({ type: ADD_TEXT, text })
export const setUserProfile = (profileInfoData) => ({ type: SET_USER_PROFILE, profileInfoData })

export default profileReducer