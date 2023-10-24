import {ProfileStatusWithHook} from '../../ProfileStatusWithHook/ProfileStatusWithHook';
import React, {ChangeEvent} from 'react';
import {ProfileType} from '../../../../../Redux/profile-reducer';
import {Input} from '../../../../common';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {UserInfo} from '../UserInfo';
import {ContactItem} from '../ContactItem';
import {maxLength150, requiredField} from '../../../../../utils/validators/validators';
import s from './UserInfoForm.module.css'
import {Button} from '../../../../common/Button/Button';

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

  const conKey = Object.keys(props.profile.contacts);

  let contacts = [];

  for (let i = 0; i < conKey.length; i++) {
    contacts.push(<ContactItem key={i} contactKey={conKey[i]} formMode={true}/>);
  }

  if (!props.editMode) {
    return <div>
      <UserInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}
                isOwner={props.isOwner}/></div>;
  }

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>

          {props.isOwner && <table className={s.tableStyle}>
              <tr>
                  <td><b>Update photo</b></td>
                  <td><input type={'file'} onChange={props.onMainPhotoSelected}/></td>
              </tr>

              <tr>
                  <td ><b>FullName:</b></td>
                  <td><Field component={Input} name={'fullName'} validate={[requiredField]}
                             placeholder={'fullName'}/></td>
              </tr>

              <tr>
                  <td><b>Looking for a job:</b></td>
                  <td><Field component={'input'} name={'lookingForAJob'} placeholder={'lookingForAJob'}
                             type={'checkbox'}/></td>
              </tr>
              <tr>
                  <td><b>Looking for a Description:</b></td>
                  <td><Field component={Input} name={'lookingForAJobDescription'}
                             validate={[maxLength150, requiredField]}
                             placeholder={'lookingForAJobDescription'}/></td>
              </tr>

              <tr>
                  <td><b>About me:</b></td>
                  <td><Field component={Input} name={'aboutMe'} validate={[maxLength150]} placeholder={'About me'}/>
                  </td>
              </tr>
          </table>}

          {/*<ProfileStatusWithHook status={props.status} updateStatusTC={props.updateStatusTC}*/}
          {/*                       isOwner={props.isOwner} name={props.profile.fullName}/>*/}
        </div>
        {props.error && <div className={s.formSummaryError}> {props.error}</div>}

        <table className={s.tableStyle}>{contacts}</table>

        <Button name="save" callBack={() => {
        }} color={'green'} size={'medium'}/>
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