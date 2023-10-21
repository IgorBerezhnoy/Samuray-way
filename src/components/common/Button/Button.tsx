import React from 'react';
import s from './Button.module.css';

export type ButtonPropsType = {
  callBack: () => void
  name: string
  color?: 'green' | 'red' | 'blue'| 'white'
  size?: 'small' | 'large' | 'medium'
  disabled?:boolean
}
export const Button = (props: ButtonPropsType) => {
  const onClickHandler = () => props.callBack();
  let size = props.size === 'large' ? s.large : props.size === 'small' ? s.small : s.medium;
  let color = props.color === 'green' ? s.greenButton : props.color === 'red' ? s.redButton : props.color === 'white' ? s.whiteButton : s.blueButton;

  return (
    <button disabled={props.disabled}
      className={color + ' ' + size}
      onClick={onClickHandler}>{props.name}</button>

  );
};

