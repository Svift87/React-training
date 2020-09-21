import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className="content__posts__container">
            <div className="content__posts__item">
                {props.message}
            </div>
            like: {props.like}
        </div>
    )
}

export default Post
