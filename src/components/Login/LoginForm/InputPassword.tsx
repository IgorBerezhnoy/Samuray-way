import React from 'react';
import s from '../Login.module.css';

type InputPropsType = {
  input: any, meta: { error: string, touched: boolean }
  isCustom?: boolean
};

export const InputPassword = ({input, meta, ...props}: InputPropsType) => {
  const isError = meta.touched && meta.error;

  return (

    <div className={s.login__field}>
      <i className="login__icon fas fa-lock"></i><input
      className={s.login__input + ' ' + s.formControl + ' ' + (isError ? s.formControlError : '')}
      {...props} {...input} {...meta} />
      {isError && <span className={s.spanFormControlError}>{meta.error}</span>}
    </div>
  );
};