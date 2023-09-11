import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from '../../../Redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';

type PropsType = { profile: ProfileType | null, status: string, updateStatusTC: (status: string) => void }
export const ProfileInfo: React.FC<PropsType> = (props) => {

    if (!!props.profile) {
        return <>
            <div><img src={`${process.env.PUBLIC_URL}/img/fon.jpg`}/></div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos.large ? props.profile.photos.large : `${process.env.PUBLIC_URL}/img/user5.png`}
                    width={'200px'}/>
                <div>
                    {props.profile.fullName && <div>FullName: {props.profile.fullName}</div>}
                    {props.profile.aboutMe && <div>aboutMe: {props.profile.aboutMe}</div>}
                    <ProfileStatus status={props.status}/>

                    <div>contacts:</div>
                    {props.profile.contacts.vk && <div>vk:{props.profile.contacts.vk}</div>}
                    {props.profile.contacts.twitter && <div>twitter:{props.profile.contacts.twitter}</div>}
                    {props.profile.contacts.instagram && <div>instagram: {props.profile.contacts.instagram}</div>}
                    {props.profile.contacts.github && <div>github: {props.profile.contacts.github}</div>}


                </div>
            </div>
        </>;
    } else {
        return <Preloader/>;
    }
};