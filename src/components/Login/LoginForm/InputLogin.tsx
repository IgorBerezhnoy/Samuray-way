import React from 'react';
import s from '../Login.module.css';

type InputPropsType = {
  input: any, meta: { error: string, touched: boolean }
  isCustom?: boolean
};

export const InputLogin = ({input, meta, ...props}: InputPropsType) => {
  const isError = meta.touched && meta.error;

  return (

    <div className={s.login__field}>
      <i className="login__icon fas fa-user"></i><input
      className={s.login__input + ' ' + s.formControl + ' ' + (isError ? s.formControlError : '')}
      placeholder="User name / Email"
      {...props} {...input} {...meta} />
      {isError && <span className={s.spanFormControlError}>{meta.error}</span>}

    </div>
  );
};