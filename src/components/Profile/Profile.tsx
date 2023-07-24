import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

//
// type PropsType={
//     state: { posts: PostsType, newPostText: string }
//         dispatch:(action:ActionType)=>void
// }

export const Profile:React.FC=(props)=> {



    return (
        <div className={s.content} >
            <ProfileInfo/>
            {/*<MyPostsContainer state={props.state} dispatch={props.dispatch}/>*/}
            <MyPostsContainer/>
        </div>
    );
}
