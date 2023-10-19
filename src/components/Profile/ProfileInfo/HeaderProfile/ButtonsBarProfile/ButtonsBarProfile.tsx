import React from 'react';
import s from "./ButtonsBarProfile.module.css"
type PropsType = {
  callBack: () => void
  name:string
  className?:string
}
export const ButtonsBarProfile = (props: PropsType) => {
  const onClickHandler = () => props.callBack();
  return (
    <div className={s.wrapper}>
      <button className={props.className==="green"?s.button:s.someButton} onClick={onClickHandler}>{props.name}</button>

    </div>
  );
};

