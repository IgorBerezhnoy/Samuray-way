import React from 'react';
import s from './ButtonsBarProfile.module.css';
import {Button, ButtonPropsType} from '../../../../common/Button/Button';

type PropsType = ButtonPropsType
export const ButtonsBarProfile = (props: PropsType) => {
  return (
    <div className={s.wrapper}>
      <Button disabled={props.disabled} name={props.name} color={props.color} callBack={props.callBack} size={'large'}/>

    </div>
  );
};

