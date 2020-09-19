import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className="content__posts">
            <h2 className="content__posts--name">
                My posts
            </h2>
<<<<<<< HEAD
            <Post message='Hi, how are you?' like='10'/>
            <Post message='It`s my first post' like='15'/>
=======
            <Post post="dasdd"/>
            <Post post="dasdddsdasdasas"/>
            <Post post="dasddasdasdasdasdasdsadd"/>
>>>>>>> 7eaf31ef943d4b831d1aa7c3c4d1a66ad5142d14
        </div>
    )
}

export default MyPosts