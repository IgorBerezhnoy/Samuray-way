import React from 'react';
import s from "./UserName.module.css"
type PropsType = {
  fullName: string
  nickname: string
}
export const UserName: React.FC<PropsType> = ({fullName, nickname}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.fullName}><h2>{fullName}</h2></div>
      <div className={s.nickname}>{nickname}</div>
    </div>
  );
};

