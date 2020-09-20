import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let post = props.postData.map( el => <Post message={el.message} like={el.like}/> )

    return (
        <div className="content__posts">
            <h2 className="content__posts--name">
                My posts
            </h2>
            { post }
        </div>
    )
}

export default MyPosts