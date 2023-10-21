import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import {maxLengthCreator150} from '../../../../utils/validators/validators';
import s from './AddPostForm.module.css';
import {InputForPost} from './InputForPost';

const AddPostForm: React.FC<InjectedFormProps> = (props) => {


  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.form}>
        <Field component={InputForPost} name={'newPostBody'} placeholder={'Enter your post'}
               validate={[maxLengthCreator150]}/>
        {/*<Button name={"Add post"} size={"large"} callBack={()=>{}} color={"blue"}/>*/}
      </div>

    </form>
  );
};
export const AddPostReduxForm = reduxForm({form: 'MyPostsAddMessageForm'})(AddPostForm);