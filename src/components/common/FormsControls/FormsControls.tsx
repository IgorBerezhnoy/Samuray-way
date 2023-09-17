import React from 'react';
import s from './formsControl.module.css';

type InputPropsType = { input: any, meta: { error: string, touched: boolean } };

export const Input = ({input, meta, ...props}: InputPropsType) => {
    const isError = meta.touched && meta.error;

    return (<div>
        <div><input
            className={s.formControl + ' ' + (isError ? s.formControlError : '')}
            {...props} {...input} {...meta} /></div>
        {isError && <div className={s.spanFormControlError}>{meta.error}</div>}
    </div>);
};