const ADD_TEXT = 'ADD-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postData: [
        { id: 1, message: "Hi, how are you?", like: 10 },
        { id: 2, message: "It`s my first post", like: 15 },
    ],
    profile: null,
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
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const addTextCreator = (text) => ({ type: ADD_TEXT, text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer