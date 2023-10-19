import React from 'react';
import s from './Button.module.css';

type PropsType = {
  callBack: () => void
  name: string
  className?: 'green' | 'red' | 'blue'
  size: 'small' | 'large' | 'medium'
}
export const Button = (props: PropsType) => {
  const onClickHandler = () => props.callBack();
  let size =props.size === 'large' ? s.large : props.size === 'small' ? s.small : s.medium;
  let color=props.className === 'green' ? s.greenButton : props.className === 'red' ? s.redButton : s.blueButton

  return (
    <button
      className={color+" "+size}
      onClick={onClickHandler}>{props.name}</button>

  );
};

