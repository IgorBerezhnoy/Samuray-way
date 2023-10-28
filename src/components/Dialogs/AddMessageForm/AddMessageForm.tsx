import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import s from '../Dialogs.module.css';
import {InputForMessage} from './InputForMessage';

const AddMessageForm: React.FC<InjectedFormProps> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.addForm}>
        <Field component={InputForMessage} name={'newMessageBody'} placeholder={'Enter your message'}/>
      </div>


    </form>
  );
};
export const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);