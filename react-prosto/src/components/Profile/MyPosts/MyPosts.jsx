import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    
    let post = props.postData.map(el => <Post message={el.message} like={el.like} />);

    let textAdd = React.createRef();

    let addNewPost = () => {
        let text = textAdd.current.value;

        props.addPost(text)
    }

    let addTextInTexteria = () => {
        let text = textAdd.current.value;
        
        textAdd.current.value = ''

        props.addText(text)
    }

    return (
        <div className={s.content__posts}>
            <h2 className={s.content__postsName}>
                My posts
            </h2>
            <div className={s.content__posts__added}>
                <textarea className={s.content__posts__addedTexteria} ref={textAdd} onInput={addTextInTexteria} value={props.textInTexteria}> </textarea>
                <button
                    onInput={addNewPost}
                    className={s.content__posts__addedButton}
                >
                    Отправить
                </button>
            </div>
            { post }
        </div>
    )
}

export default MyPosts