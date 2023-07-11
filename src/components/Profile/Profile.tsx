import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType, updateNewPostText} from '../../Redux/State';


type PropsType={
    posts:PostsType
    addPost: (post: string) => void
    updateNewPostText: (text: string) => void
    newPostText:string

}

export const Profile:React.FC<PropsType>=(props)=> {



    return (
        <div className={s.content} >
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={updateNewPostText}/>
        </div>
    );
}
