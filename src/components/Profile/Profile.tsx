import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../Redux/profile-reducer';

//
type PropsType={
    profile:ProfileType
}

export const Profile:React.FC<PropsType>=(props)=> {



    return (
        <div className={s.content} >
            <ProfileInfo profile={props.profile}/>
            {/*<MyPostsContainer state={props.state} dispatch={props.dispatch}/>*/}
            <MyPostsContainer/>
        </div>
    );
}
