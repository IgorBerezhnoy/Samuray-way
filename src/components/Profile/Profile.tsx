import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader/Preloader';
import {ProfileContainerPropsType} from './ProfileContainer';

//
type PropsType = ProfileContainerPropsType & { isOwner: boolean }

export const Profile: React.FC<PropsType> = (props) => {


    return (
        <div className={s.content}>

            {props.profile ?
                <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC} isOwner={props.isOwner} savePhoto={props.savePhoto}/> :
                <Preloader/>}
            {/*<MyPostsContainer state={props.state} dispatch={props.dispatch}/>*/}
            <MyPostsContainer/>
        </div>
    );
};
