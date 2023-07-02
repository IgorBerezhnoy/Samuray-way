import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogsDataPropsType = {
    name: string
    id: string
}
type PropsType = {
    user: DialogsDataPropsType[]
}

const DialogItem = (props: DialogsDataPropsType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>);
};


type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

export const Dialogs = () => {

    let dialogs = [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Andrew'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Valera'},
        {id: '6', name: 'Viktor'},
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What are you doing'},
        {id: 3, message: 'Yo'}
    ];

    let dialogsItems = dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
    let messagesItems = messages.map(el => <Message key={el.id} message={el.message}/>);

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

