import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../Redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import {Redirect} from 'react-router-dom';

//
type PropsType = {
    profile: ProfileType | null

}

export const Profile: React.FC<PropsType> = (props) => {


    return (
        <div className={s.content}>

            {props.profile ? <ProfileInfo profile={props.profile}/> : <Preloader/>}
            {/*<MyPostsContainer state={props.state} dispatch={props.dispatch}/>*/}
            <MyPostsContainer/>
        </div>
    );
};
