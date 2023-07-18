import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionType, PostsType} from '../../Redux/Store';


type PropsType={
    state: { posts: PostsType, newPostText: string }
        dispatch:(action:ActionType)=>void
}

export const Profile:React.FC<PropsType>=(props)=> {



    return (
        <div className={s.content} >
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}
