import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export function MyPosts() {

    let posts = [
        {id: 1, message: 'Hello world!', like: 4},
        {id: 2, message: 'Hi how are you?', like: 432},
        {id: 3, message: 'post 3', like: 32},
        {id: 3, message: 'Yo', like: 0}
    ];
    let postsItems = posts.map(el => <Post key={el.id} message={el.message} like={el.like}/>);

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
