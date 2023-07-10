import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MassagesType} from '../../Redux/State';

type PropsType = {
    state: { dialogs: DialogsType, messages: MassagesType }
}

export const Dialogs: React.FC<PropsType> = (props) => {
    let dialogsItems = props.state.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id} srs={el.srs}/>);


    let messagesItems = props.state.messages.map(el => <Message key={el.id} message={el.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogsItems}>
                    {dialogsItems}
                </div>
                <div className={s.messages}>
                    {messagesItems}
                </div>
            </div>
        </div>
    );
};

