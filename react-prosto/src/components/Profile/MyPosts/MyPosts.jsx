import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className="content__posts">
            <h2 className="content__posts--name">
                My posts
            </h2>
            <Post post="dasdd"/>
            <Post post="dasdddsdasdasas"/>
            <Post post="dasddasdasdasdasdasdsadd"/>
        </div>
    )
}

export default MyPosts