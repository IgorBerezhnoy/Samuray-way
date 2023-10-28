import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsType, MessagesType} from '../../Redux/diologs-reducer';
import {AddMessageReduxForm} from './AddMessageForm/AddMessageForm';
import {FriendMessage} from './Message/FriendMessage/FriendMessage';
import {MyMessage} from './Message/MyMessage/MyMessage';

type PropsType = {

  dialogsPage: {
    dialogs: DialogsType
    messages: MessagesType
  }
  addMessage: (message: string) => void, userName: string, userPhoto: string
};

export const Dialogs: React.FC<PropsType> = (props) => {
  let userPhoto = props.userPhoto || `${process.env.PUBLIC_URL}/img/myPhoto.jpeg`;


  let dialogsItems = props.dialogsPage.dialogs.map(el =>
    <DialogItem key={el.id} name={el.name} id={el.id} srs={el.srs}/>);
debugger
  let allMessages = props.dialogsPage.messages.map(el => el.userId === '0'
    ? <MyMessage message={el} userName={props.userName} userPhoto={userPhoto}/>
    : <FriendMessage message={el} friend={props.dialogsPage.dialogs[1]}/>
  );
  // let friendMessages = friendMessages.map(el => <Message key={el.id} message={el.message}/>);
  // let myMessages = props.dialogsPage.myMessages.map(el => <Message key={el.id} message={el.message}/>);
  console.log(allMessages);
  const onSubmit = (formDate: any) => {
    console.log(formDate);
    props.addMessage(formDate.newMessageBody);
    formDate.newMessageBody = '';
  };

  return (
    <div className={s.dialogs}>

      <div className={s.dialogsWrapper}>
        <div className={s.dialogsItems}>
          {dialogsItems}
        </div>
        <div className={s.cross}></div>
        <div className={s.messages}>
          {allMessages}
          {/*<FriendMessage message={friendMessages[1]} friend={props.dialogsPage.dialogs[1]}/>*/}
          {/*<FriendMessage message={friendMessages[1]} friend={props.dialogsPage.dialogs[1]}/>*/}
          {/*<MyMessage message={myMessages[1]} userName={props.userName} userPhoto={userPhoto}/>*/}
          {/*{friendMessages}*/}
          {/*{myMessages}*/}
        </div>
      </div>


      <div><AddMessageReduxForm onSubmit={onSubmit}/></div>
    </div>
  );
};


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