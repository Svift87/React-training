const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://b1.filmpro.ru/c/17488.700xp.jpg',
            fullName: 'Dmitriy',
            status: 'I`m boss',
            location: {
                city: 'Novosibirsk',
                country: 'Russia'
            },
            followed: true
        },
        {
            id: 2,
            photoUrl: 'https://b1.filmpro.ru/c/17488.700xp.jpg',
            fullName: 'Kostya',
            status: 'I`m crayzi',
            location: {
                city: 'Novosibirsk',
                country: 'Russia'
            },
            followed: true
        },
        {
            id: 3,
            photoUrl: 'https://b1.filmpro.ru/c/17488.700xp.jpg',
            fullName: 'Andrew',
            status: 'Super man',
            location: {
                city: 'Novosibirsk',
                country: 'Russia'
            },
            followed: false
        },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true }
                    } else {
                        return u
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false }
                    } else {
                        return u
                    }
                })
            }
        case SET_USERS:
            return {
                ...state, 
                users: [ ...state.users, ...action.users ]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer