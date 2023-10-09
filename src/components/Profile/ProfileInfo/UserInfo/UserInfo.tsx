import {ProfileStatusWithHook} from '../ProfileStatusWithHook/ProfileStatusWithHook';
import React from 'react';
import {ProfileType} from '../../../../Redux/profile-reducer';
import {UserContacts} from './UserContacts';

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateStatusTC: (status: string) => void
}
export const UserInfo = (props: PropsType) => {

    return (<div>

        <div>
            {props.profile.fullName && <div><b>FullName:</b> {props.profile.fullName}</div>}
            {props.profile.lookingForAJob && <div><b>lookingForAJob:</b> {props.profile.lookingForAJob}</div>}

            <ProfileStatusWithHook status={props.status} updateStatusTC={props.updateStatusTC}
                                   isOwner={props.isOwner} name={props.profile.fullName}/>

            {props.profile.aboutMe && <div><b>AboutMe:</b> {props.profile.aboutMe}</div>}
        </div>

        <UserContacts profile={props.profile}/>


    </div>);
};
