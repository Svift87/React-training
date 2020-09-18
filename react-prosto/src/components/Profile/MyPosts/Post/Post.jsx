import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className="content__posts__container">
            <div className="content__posts__item">
                {props.post}
            </div>
        </div>
    )
}

export default Post