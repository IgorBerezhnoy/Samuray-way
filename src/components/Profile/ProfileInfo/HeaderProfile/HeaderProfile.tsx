import {ProfileType} from '../../../../Redux/profile-reducer';
import s from './HeaderProfile.module.css';
import {PostsFollowersBlock} from './PostsFollowersBlock/PostsFollowersBlock';
import {UserName} from './UserName/UserName';
import React from 'react';
import {Preloader} from '../../../common';
import {ButtonsBarProfile} from './ButtonsBarProfile/ButtonsBarProfile';

type PropsTypeHeader = {
  randomBackground: string,
  profile: ProfileType | null,
  setEditMode: (status: boolean) => void
  editMode: boolean
  isOwner: boolean
  postsLeng: number
}
export const HeaderProfile = (props: PropsTypeHeader) => {
  const setEditModeHandler=()=>props.setEditMode(!props.editMode)


  if (!!props.profile) {
  return (
    <div className={'headerProfile'}>
      <div className={s.wrapper}>
        <img className={s.imgBackgrounds} src={props.randomBackground}/>
        <img className={s.imgMain}
             src={props.profile.photos.large ? props.profile.photos.large : `${process.env.PUBLIC_URL}/img/user5.png`}
             width={'200px'}/>
        <PostsFollowersBlock posts={props.postsLeng} followers={'2.1k'} follow={'32k'}/>
        <UserName fullName={props.profile.fullName} nickname={'@' + props.profile.fullName}/>
        {props.isOwner ? <ButtonsBarProfile callBack={setEditModeHandler} className={props.editMode ? 'cancel' : 'green'} name={props.editMode ? 'cancel' : 'edit'}/>
          : 'Somebutton'}
      </div>
    </div>
  )}else {
    return <Preloader/>;
  }
};