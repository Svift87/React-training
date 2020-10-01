const ADD_AUTH = 'ADD_AUTH'
const TOGGLE_FETCHING_AUTH = 'TOGGLE_FETCHING_AUTH'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFatching: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH: {
            return {
                ...state,
                ...action.auth
            }
        }
        case TOGGLE_FETCHING_AUTH: {
            return {
                ...state,
                isFatching: action.isFatching,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const addAuthAC = ( userId, email, login ) => ({ type: ADD_AUTH, auth: {userId, email, login} })
export const toggleFetchingAC = (isFatching) => ({ type: TOGGLE_FETCHING_AUTH, isFatching })

export default authReducer