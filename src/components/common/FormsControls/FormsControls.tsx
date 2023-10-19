import React from 'react';
import s from './formsControl.module.css';

type InputPropsType = { input: any, meta: { error: string, touched: boolean }
isCustom?:boolean };

export const Input = ({input, meta, ...props}: InputPropsType) => {
    const isError = meta.touched && meta.error;

    return (<>
        <input
            className={s.formControl + ' ' + (isError ? s.formControlError : '')}
            {...props} {...input} {...meta} />
        {isError && <span className={s.spanFormControlError}>{meta.error}</span>}
    </>);
};