import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogsDataPropsType = {
    name: string
    id: string
    srs:string
}


export const DialogItem:React.FC<DialogsDataPropsType> = (props) => {
    return (
        <div className={s.dialogsItemsImg}>
            <NavLink className={`${s.dialog}`} activeClassName={s.active} to={'/dialogs/' + props.id}>{props.name}</NavLink>
            <NavLink className={`${s.dialog}`} activeClassName={s.active} to={'/dialogs/' + props.id}> <img src={props.srs} width={"50px"} height={"50px"}/></NavLink>
        </div>);
};