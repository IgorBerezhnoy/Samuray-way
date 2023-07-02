import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';




export function Profile() {

    let posts = [
        {id: 1, message: 'Hello world!', like: 4},
        {id: 2, message: 'Hi how are you?', like: 432},
        {id: 3, message: 'post 3', like: 32},
        {id: 3, message: 'Yo', like: 0}
    ];

    return (
        <div className={s.content} >
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
}
