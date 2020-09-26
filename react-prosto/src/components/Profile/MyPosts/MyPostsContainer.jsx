import React from 'react';
import MyPosts from './MyPosts';
import {addTextCreator, addPostCreator} from '../../../Redux/profileReducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        textInPost: state.profilePage.textInPost
    }    
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostCreator())
        },
        addNewText: (text) => {
            dispatch(addTextCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
 
export default MyPostsContainer