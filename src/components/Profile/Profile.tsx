import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../Redux/State';


type PropsType={
    posts:PostsType
    addPost: (post: string) => void
}

export const Profile:React.FC<PropsType>=(props)=> {



    return (
        <div className={s.content} >
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
}
