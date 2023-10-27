import React from 'react';
import s from './InputForMessage.module.css';
import {Button} from '../../common/Button/Button';

type InputPropsType = {
  input: any, meta: { error: string, touched: boolean }
  isCustom?: boolean
};

export const InputForMessage = ({input, meta, ...props}: InputPropsType) => {
  const isError = meta.touched && meta.error;


  return (<>
    <div className={s.form}><input

      className={s.formControl + ' ' + (isError ? s.formControlError : '')}
      {...props} {...input} {...meta} />
      <Button name={'Add post'}  size={'large'}callBack={()=>{}} color={'blue'}/></div>

    <div>{isError && <div className={s.spanFormControlError}>{meta.error}</div>}</div>
  </>)
};