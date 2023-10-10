import {ProfileStatusWithHook} from '../../ProfileStatusWithHook/ProfileStatusWithHook';
import React from 'react';
import {ProfileType} from '../../../../../Redux/profile-reducer';
import {Input} from '../../../../common';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {UserInfo} from '../UserInfo';
import {ContactItem} from '../ContactItem';

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    editMode:boolean
    updateStatusTC: (status: string) => void
    onClickEditMode:()=>void
}

export const UserInfoForm: React.FC<InjectedFormProps<formDateType, PropsType> & PropsType> = (props) => {



    const conKey = Object.keys(props.profile.contacts);
    // const conVal = Object.values(props.profile.contacts);

    let contacts = [];

    for (let i = 0; i < conKey.length; i++) {
        contacts.push(<ContactItem contactKey={conKey[i]}  formMode={true}/>);}

    if (!props.editMode) {
        return <div>
            <button onClick={props.onClickEditMode}>edit</button>
            <UserInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}
                      isOwner={props.isOwner}/></div>;
    }

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <div><b>FullName:</b>
                            <Field component={Input} name={'fullName'} placeholder={'fullName'} pattern={"props.profile.fullName"}/>
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