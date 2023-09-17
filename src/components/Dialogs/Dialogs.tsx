import React, {KeyboardEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {DialogsType, MessagesType} from '../../Redux/diologs-reducer';

type PropsType = {

    dialogsPage: {
        dialogs: DialogsType, messages: MessagesType, newMessageText: string
    }
    addMessage: (message: string) => void
};

export const Dialogs: React.FC<PropsType> = (props) => {

    let dialogsItems = props.dialogsPage.dialogs.map(el =>
        <DialogItem key={el.id} name={el.name} id={el.id} srs={el.srs}/>);

    let messagesItems = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>);


    const onSubmit = (formDate: any) => {
        console.log(formDate);
        props.addMessage(formDate.newMessageBody);
        formDate.newMessageBody=""
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
                <AddMessageReduxForm onSubmit={onSubmit}/>
                {/*<textarea value={props.dialogsPage.newMessageText} onChange={onMessageChange}*/}
                {/*          style={{width: '827px', height: '58px'}} ref={newMessageElement}*/}
                {/*          onKeyPress={OnClickEnter} placeholder={'Enter your message'}> </textarea>*/}
                {/*<button onClick={addMessage}>Send</button>*/}
            </div>
        </>
    );
};


const AddMessageForm: React.FC<InjectedFormProps> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addForm}>
                <Field component={'textarea'} name={'newMessageBody'}
                       placeholder={'Enter your message'} style={{width: '827px', height: '58px'}}
                />
                <button>Send</button>
            </div>


        </form>
    );
};

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);


// addMessage: (message: string) => void
// updateNewMessageText: (message: string) => void
// newMessageText:string


// let newMessageElement = React.createRef<HTMLTextAreaElement>();
// // const addMessage = () => {
// //     let text = newMessageElement.current?.value;
// //     if (text) {
// //         props.addMessage();
// //     }
// // };
// // const OnClickEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
// //     if (e.key === 'Enter') {
// //         addMessage();
// //     }
// // };