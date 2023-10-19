import React from 'react';
import s from './ButtonsBarProfile.module.css';
import {Button} from '../../../../common/Button/Button';

type PropsType = {
  callBack: () => void
  name: string
  className?: "green" |"red"| "blue"
}
export const ButtonsBarProfile = (props: PropsType) => {
  return (
    <div className={s.wrapper}>
      <Button name={props.name} className={props.className} callBack={props.callBack} size={'large'}/>

    </div>
  );
};

