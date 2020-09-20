import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, how are you?", like: 10},
        {id: 2, message: "It`s my first post", like: 15},
    ]

    let post = postData.map( el => <Post message={el.message} like={el.like}/> )

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