import React, {KeyboardEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesType,} from '../../Redux/Store';

type PropsType = {
    dialogsPage: { dialogs: DialogsType, messages: MessagesType, newMessageText: string }
    addMessage: () => void
    onMessageChange: (text: string) => void,
}

export const Dialogs: React.FC<PropsType> = (props) => {


    let dialogsItems = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id} srs={el.srs}/>);


    let messagesItems = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        let text = newMessageElement.current?.value;
        if (text) {
            props.addMessage();
        }
    };
    const OnClickEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addMessage();
        }
    };
    const onMessageChange = () => {
        let text = newMessageElement.current?.value;
        if (text) {
            props.onMessageChange(text);
        }
    };
    return (
        <>
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
            <div className={s.addForm}>
                <textarea value={props.dialogsPage.newMessageText} onChange={onMessageChange}
                          style={{width: '827px', height: '58px'}} ref={newMessageElement}
                          onKeyPress={OnClickEnter} placeholder={'Enter your message'}> </textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </>
    );
};

// addMessage: (message: string) => void
// updateNewMessageText: (message: string) => void
// newMessageText:string