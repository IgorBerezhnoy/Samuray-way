import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from '../../../Redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';

type PropsType = { profile: ProfileType }
export const ProfileInfo: React.FC<PropsType> = (props) => {

    if (!!props.profile) {
        return <>
            <div><img src={`${process.env.PUBLIC_URL}/img/fon.jpg`}/></div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos.large ? props.profile.photos.large : `${process.env.PUBLIC_URL}/img/user5.png`}
                    width={'200px'}/>
                <div>

                    <div>aboutMe: {props.profile.aboutMe}</div>
                    <div>contacts:</div>
                    <div>vk:{props.profile.contacts.vk}</div>
                    <div>twitter:{props.profile.contacts.twitter}</div>
                    <div>instagram: {props.profile.contacts.instagram}</div>
                    <div>github: {props.profile.contacts.github}</div>


                </div>
            </div>
        </>;
    } else {
        return <Preloader/>;
    }
};