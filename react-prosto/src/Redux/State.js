import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import messageReducer from './messageReducer'
import profileReducer from './profileReducer'
import usersReducer from "./usersReducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer, 
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk)); // npm i redux-thunk; чтобы узнать что вставлять в applyMiddleware
window.store = store
export default store
