import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MassagesType} from '../../index';

type PropsType = {
    messages: MassagesType
    dialogs: DialogsType
}

export const Dialogs:React.FC<PropsType> = (props) => {


    let dialogsItems = props.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    let messagesItems = props.messages.map(el => <Message key={el.id} message={el.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
            </div>
        </div>
    );
};

