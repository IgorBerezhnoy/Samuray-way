import {ProfileStatusWithHook} from '../ProfileStatusWithHook/ProfileStatusWithHook';
import React, {useState} from 'react';
import {ProfileType} from '../../../../Redux/profile-reducer';
import {Input} from '../../../common';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {UserInfo} from './UserInfo';
import {ContactItem} from './ContactItem';

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateStatusTC: (status: string) => void
}

export const UserInfoForm: React.FC<InjectedFormProps<formDateType, PropsType> & PropsType> = (props) => {


    const [editMode, setEditMode] = useState(false);

    const conKey = Object.keys(props.profile.contacts);
    // const conVal = Object.values(props.profile.contacts);

    let contacts = [];

    for (let i = 0; i < conKey.length; i++) {
        contacts.push(<ContactItem contactKey={conKey[i]}  formMode={true}/>);}

    const onSubmit = (formDate: any) => {
        debugger
        console.log(formDate);
        let data: formDateDomainType = {
            userId: formDate.userId,
            fullName: formDate.fullName as string,
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
        console.log(data);
        onClickSaveMode();
    };


    const onClickEditMode = () => setEditMode(true);

    const onClickSaveMode = () => {
        setEditMode(false);
    };


    if (!editMode) {
        return <div>
            <button onClick={onClickEditMode}>edit</button>
            <UserInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}
                      isOwner={props.isOwner}/></div>;
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <div><b>FullName:</b>
                        <Field component={Input} name={'fullName'} placeholder={'fullName'}/>
                    </div>

                    <div><b>Looking for a job:</b>
                        <Field component={'input'} name={'lookingForAJob'} placeholder={'lookingForAJob'}
                               type={'checkbox'}/>
                    </div>

                    <div><b>Looking for a Description:</b>
                        <Field component={Input} name={'lookingForAJobDescription'}
                               placeholder={'lookingForAJobDescription'}/>
                    </div>

                    <div><b>About me:</b>
                        <Field component={Input} name={'aboutMe'} placeholder={'About me'}/>
                    </div>

                    <ProfileStatusWithHook status={props.status} updateStatusTC={props.updateStatusTC}
                                           isOwner={props.isOwner} name={props.profile.fullName}/>

                </div>

                <div>{contacts}</div>

                <button>save</button>
            </form>
        </div>);
};
export const UserInfoReduxForm = reduxForm<formDateType, PropsType>({form: 'UserInfoForm'})(UserInfoForm);


export type formDateDomainType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}
type formDateType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}