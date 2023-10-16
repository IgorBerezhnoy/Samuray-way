import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from '../../../Redux/profile-reducer';
import {UserInfo} from './UserInfo/UserInfo';
import {Preloader} from '../../common';
import {UserInfoReduxForm} from './UserInfo/UserInfoForm/UserInfoForm';
import {formDateDomainType} from '../../../api/Api';

export const ProfileInfo: React.FC<PropsType> = (props) => {

  const [editMode, setEditMode] = useState(false);
  let randomBackground = props.backgrounds[5];
  // let randomBackground = props.backgrounds[Math.floor(props.backgrounds.length * Math.random())];

  if (!!props.profile) {
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) {
        props.savePhoto(e.target.files[0]);
      }
    };
    const onSubmit = async (formDate: any) => {
      let data: formDateDomainType = {
        userId: props.myId!.toString(),
        fullName: formDate.fullName as string,
        aboutMe: formDate.aboutMe,
        lookingForAJob: formDate.lookingForAJob as boolean,
        lookingForAJobDescription: formDate.lookingForAJobDescription as string,
        contacts: {
          github: formDate.github,
          mainLink: formDate.mainLink,
          website: formDate.website,
          facebook: formDate.facebook,
          instagram: formDate.instagram,
          twitter: formDate.twitter,
          youtube: formDate.youtube,
          vk: formDate.vk
        }
      };
      let res = await props.updateProfileInfoTC(data);
      if (res.data.resultCode === 0) {
        setEditMode(false);
      }
    };

    return <>
      <div style={{position: 'relative'}}>
        <img className={s.imgBackgrounds} src={randomBackground}/>
        <img className={s.imgMain}
             src={props.profile.photos.large ? props.profile.photos.large : `${process.env.PUBLIC_URL}/img/user5.png`}
             width={'200px'}/>
      </div>

      <div className={s.descriptionBlock}>


        {/*{props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}*/}

        {props.isOwner
          ? <UserInfoReduxForm profile={props.profile} initialValues={props.profile} status={props.status}
                               updateStatusTC={props.updateStatusTC}
                               isOwner={props.isOwner} onSubmit={onSubmit} setEditMode={setEditMode}
                               editMode={editMode} onMainPhotoSelected={onMainPhotoSelected}/>
          : <UserInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}
                      isOwner={props.isOwner}/>
        }

      </div>
    </>;

  } else {
    return <Preloader/>;
  }
};

type PropsType = {
  profile: ProfileType | null, status: string,
  updateStatusTC: (status: string) => void,
  myId: number | null, isOwner: boolean, savePhoto: (file: File) => void
  updateProfileInfoTC: (profileInfo: formDateDomainType) => any
  backgrounds: string[]
}

