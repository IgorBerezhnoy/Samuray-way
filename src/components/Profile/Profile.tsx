import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileContainerPropsType} from './ProfileContainer';
import {Preloader} from '../common';

//
type PropsType = ProfileContainerPropsType & { isOwner: boolean }

export const Profile: React.FC<PropsType> = (props) => {


    return (
        <div className={s.content}>

            {props.profile ?
                <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}
                             isOwner={props.isOwner} savePhoto={props.savePhoto} myId={props.myId} updateProfileInfoTC={props.updateProfileInfoTC}/> :
                <Preloader/>}
            <MyPostsContainer/>
        </div>
    );
};
