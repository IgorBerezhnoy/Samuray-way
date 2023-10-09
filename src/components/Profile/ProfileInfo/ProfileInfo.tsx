import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from '../../../Redux/profile-reducer';
import {UserInfo} from './UserInfo/UserInfo';
import {Preloader} from '../../common';
import {UserInfoForm, UserInfoReduxForm} from './UserInfo/UserInfoForm';
import {reduxForm} from 'redux-form';
import {LoginForm} from '../../Login/LoginForm';

type PropsType = { profile: ProfileType | null, status: string, updateStatusTC: (status: string) => void, isOwner: boolean, savePhoto: (file: File) => void }
export const ProfileInfo: React.FC<PropsType> = (props) => {

    if (!!props.profile) {
        const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files?.length) {
                debugger
                props.savePhoto(e.target.files[0]);
            }

        };

        return <>
            <div><img src={`${process.env.PUBLIC_URL}/img/fon.jpg`}/></div>

            <div className={s.descriptionBlock}>

                <img
                    src={props.profile.photos.large ? props.profile.photos.large : `${process.env.PUBLIC_URL}/img/user5.png`}
                    width={'200px'}/>

                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {props.isOwner
                    ? <UserInfoReduxForm profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}
                                    isOwner={props.isOwner}/>
                    : <UserInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}
                                isOwner={props.isOwner}/>
                }

            </div>
        </>;

    } else {
        return <Preloader/>;
    }
};
export const LoginReduxForm = reduxForm({form: 'login'} )(LoginForm);
