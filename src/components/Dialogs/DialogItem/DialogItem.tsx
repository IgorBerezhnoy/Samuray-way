import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {DialogType} from '../../../Redux/diologs-reducer';

type DialogsDataPropsType = {
  user: DialogType
  setCurrentUser: (user: DialogType) => void
}


export const DialogItem: React.FC<DialogsDataPropsType> = (props) => {
  const setUser = () => props.setCurrentUser(props.user);


  return (
    <div className={s.dialogsItemsImg}>
      <NavLink className={`${s.dialog}`} onClick={setUser} activeClassName={s.active}
               to={'/dialogs/' + props.user.id}>{props.user.name}</NavLink>
      <NavLink className={`${s.dialog}`} onClick={setUser} activeClassName={s.active} to={'/dialogs/' + props.user.id}>
        <img src={props.user.srs} width={'50px'} height={'50px'}/></NavLink>
    </div>);
};