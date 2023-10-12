import {ProfileStatusWithHook} from '../../ProfileStatusWithHook/ProfileStatusWithHook';
import React, {ChangeEvent, useState} from 'react';
import {ProfileType} from '../../../../../Redux/profile-reducer';
import {Input} from '../../../../common';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {UserInfo} from '../UserInfo';
import {ContactItem} from '../ContactItem';

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    editMode: boolean
    updateStatusTC: (status: string) => void
    setEditMode: (isActive: boolean) => void
    onMainPhotoSelected: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UserInfoForm: React.FC<InjectedFormProps<formDateType, PropsType> & PropsType> = (props) => {
    let [error, setError]=useState<string>("")

if (props.error){
    if (props.error===error){
    setError(props.error)
    }
}

    console.log('error', props.error);

    const onClickEditMode = () => props.setEditMode(true);
    const onClickCancel = () => props.setEditMode(false);

    const conKey = Object.keys(props.profile.contacts);

    let contacts = [];

    for (let i = 0; i < conKey.length; i++) {
        contacts.push(<ContactItem key={i} contactKey={conKey[i]} formMode={true}/>);
    }

    if (!props.editMode) {
        return <div>
            <button onClick={onClickEditMode}>edit</button>
            <UserInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}
                      isOwner={props.isOwner}/></div>;
    }

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <div>
                        <button onClick={onClickCancel}>cancel</button>
                    </div>
                    {props.isOwner &&
                        <div><b>Update photo</b> <input type={'file'} onChange={props.onMainPhotoSelected}/></div>}
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
                {props.error && <div> {error}</div>}
                {/*{error && <div className={s.formSummaryError}> {error}</div>}*/}

                <button>save</button>
            </form>
        </div>);
};

export const UserInfoReduxForm = reduxForm<formDateType, PropsType>({form: 'userInfoForm'})(UserInfoForm);


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