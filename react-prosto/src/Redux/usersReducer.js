import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTAL_USER_COUNT = 'TOTAL_USER_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const IS_FATCHING_DISABLED_BTN = 'IS_FATCHING_DISABLED_BTN'


let initialState = {
    users: [],
    sizePage: 10,
    totalUserCount: 80,
    currentPage: 1,
    isFatching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    } else {
                        return u
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    } else {
                        return u
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFatching: action.isFatching
            }
        case IS_FATCHING_DISABLED_BTN:
            return {
                ...state,
                followingInProgress: action.isFatching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const totalUser = (totalUserCount) => ({ type: TOTAL_USER_COUNT, totalUserCount })
export const toggleFetching = (isFatching) => ({ type: TOGGLE_FETCHING, isFatching })
export const disabledBtn = (isFatching, userId) => ({ type: IS_FATCHING_DISABLED_BTN, isFatching, userId })


// Санки

export const getUsers = (currentPage, sizePage) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        usersAPI.getUsers(currentPage, sizePage)
            .then(data => {
                dispatch(toggleFetching(false))
                dispatch(setUsers(data.items))
                dispatch(totalUser(data.totalCount))
            })
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(disabledBtn(true, id))
        usersAPI.folow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(disabledBtn(false, id))
                    dispatch(unfollowSuccess(id))
                }
            })
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(disabledBtn(true, id))
        usersAPI.unFolow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(disabledBtn(false, id))
                    dispatch(followSuccess(id))
                }
            })
    }
}





export default usersReducer