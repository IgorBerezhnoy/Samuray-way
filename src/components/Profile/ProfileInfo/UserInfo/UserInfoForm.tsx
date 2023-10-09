import {ProfileStatusWithHook} from '../ProfileStatusWithHook/ProfileStatusWithHook';
import React, {useState} from 'react';
import {ProfileType} from '../../../../Redux/profile-reducer';
import {Input} from '../../../common';
import {formDateType} from '../../../../api/Api';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {LoginForm} from '../../../Login/LoginForm';

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateStatusTC: (status: string) => void
}
export const UserInfoForm: React.FC<InjectedFormProps<any, PropsType> & PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const {vk, twitter, instagram, github, mainLink, website} = props.profile.contacts;

    const onSubmit = (formDate: any) => {
        // let data: formDateType = {
        //     email: formDate.login as string,
        //     password: formDate.password as string,
        //     rememberMe: formDate.rememberMe as boolean
        // };
        // loginDateTC(data);
    };

    const onClickEditMode = () => {
        // if (editMode){
        //
        // }
        setEditMode(!editMode);
    };
    return (
        <div>
            <button onClick={onClickEditMode}>edit</button>
            <form onSubmit={onSubmit}>
                <div>
                    {/*<div><Field component={Input} validate={[requiredField, minLength]} name={'login'} placeholder={'Login'}/>*/}
                    {/*</div>*/}
                    {props.profile.fullName && <div><b>FullName:</b>
                        <span><Field component={Input} name={'fullName'} placeholder={'fullName'}/></span>
                    </div>}


                    {props.profile.lookingForAJob && <div><b>lookingForAJob:</b> {props.profile.lookingForAJob}</div>}

                    <ProfileStatusWithHook status={props.status} updateStatusTC={props.updateStatusTC}
                                           isOwner={props.isOwner} name={props.profile.fullName}/>

                    {props.profile.aboutMe && <div><b>AboutMe:</b> {props.profile.aboutMe}</div>}
                </div>

                mainLink || website || vk || twitter || instagram || github)
                ?
                <div>
                    {mainLink && <div><b>mainLink:</b>{mainLink}</div>}
                    {website && <div><b>website:</b>{website}</div>}
                    {vk && <div><b>vk:</b>{vk}</div>}
                    {twitter && <div><b>twitter:</b>{twitter}</div>}
                    {instagram && <div>instagram: {instagram}</div>}
                    {github && <div><b>github:</b> {github}</div>}
                </div>

                : <> I don't have contacts</>

            </form>


        </div>);
};
export const UserInfoReduxForm = reduxForm<any, PropsType>({form: 'UserInfoForm'})(UserInfoForm);
