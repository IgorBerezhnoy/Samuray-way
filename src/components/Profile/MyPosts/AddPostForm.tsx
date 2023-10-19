import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import {Input} from '../../common';
import {maxLength30, requiredField} from '../../../utils/validators/validators';
import {Button} from '../../common/Button/Button';
import s from "./AddPostForm.module.css"

const AddPostForm: React.FC<InjectedFormProps> = (props) => {


  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.form}>
        <Field component={Input} name={'newPostBody'} placeholder={'Enter your post'}
               validate={[requiredField, maxLength30]}/>
        <Button name={"Add post"} size={"large"} callBack={()=>{}} className={"blue"}/>
      </div>

    </form>
  );
};
export const AddPostReduxForm = reduxForm({form: 'MyPostsAddMessageForm'})(AddPostForm);