import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className="content__posts">
            <h2 className="content__posts--name">
                My posts
            </h2>
            <Post message='Hi, how are you?' like='10'/>
            <Post message='It`s my first post' like='15'/>
        </div>
    )
}

export default MyPosts