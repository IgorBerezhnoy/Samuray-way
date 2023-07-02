import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

type PostsType = {
    id: number
    message: string
    like: number
}
type PropsType={
    posts:PostsType[]
}

export function MyPosts(props:PropsType) {

    let postsItems = props.posts.map(el => <Post key={el.id} message={el.message} like={el.like}/>);

    return (
        <div className={s.postsBlock}>

            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <div>{postsItems}
                </div>
            </div>
        </div>

    );
}
