import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export function MyPosts(props:any) {
    debugger
    return (
        <div className={s.content}>

            <div>My post
                <div className={'posts'}><textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post message={'Hello world!'} like={4} src={'https://wa-groups.ru/img/user5.png'}/>
                <Post message={'Hi how are you?'} like={3}src={'https://wa-groups.ru/img/user5.png'}/>
                <Post message={'post 3'}  like={0}src={'https://wa-groups.ru/img/user5.png'}/>

            </div>
        </div>

    );
}
