import React from 'react';
import MyPosts from './MyPosts';
import {addTextCreator, addPostCreator} from '../../../Redux/profileReducer'

const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    let addNewPost = () => {
        let action = addPostCreator()
        props.store.dispatch(action)
    }

    let addNewText = (text) => {
        let action = addTextCreator(text)
        props.store.dispatch(action)
    }
    
    return (
        <MyPosts data={state.postData} text={state.textInPost} addNewPost={addNewPost} addNewText={addNewText}  />
    )
}
 
export default MyPostsContainer