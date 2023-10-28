import React, {MouseEvent, useRef, useState} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsType, DialogType, MessagesType} from '../../Redux/diologs-reducer';
import {AddMessageReduxForm} from './AddMessageForm/AddMessageForm';
import {FriendMessage} from './Message/FriendMessage/FriendMessage';
import {MyMessage} from './Message/MyMessage/MyMessage';
import {Preloader} from '../common';


export const Dialogs: React.FC<PropsType> = (props) => {
  let userPhoto = props.userPhoto || `${process.env.PUBLIC_URL}/img/myPhoto.jpeg`;
  const dialogsPage = props.dialogsPage;
  const bottomRef = useRef(null);
  let [currentUser, setCurrentUser] = useState<DialogType>(dialogsPage.dialogs[0]);
  let [loader, setLoader] = useState<boolean>(false);


  let dialogsItems = dialogsPage.dialogs.map(el =>
    <DialogItem key={el.id} user={el} setCurrentUser={setCurrentUser}/>);
  let allMessages = dialogsPage.messages.map(el => el.userId === '0'
    ? <MyMessage message={el} userName={props.userName} userPhoto={userPhoto}/>
    : <FriendMessage message={el} friend={currentUser}/>
  );
  const onSubmit = (formDate: any) => {
    if (formDate.newMessageBody.trim()) {
      props.addMessage(formDate.newMessageBody);
      formDate.newMessageBody = '';
      setLoader(true);
      setTimeout(() => {
        props.addFriendMessage();
        setLoader(false);
      }, 2000);
    }
  };


  const scrollToBottom = (e: MouseEvent<HTMLDivElement> | any) => {
    if (e.target.tagName === 'BUTTON') {
      debugger
      // @ts-ignore
      bottomRef.current.scrollIntoView({behavior: 'smooth'});
    }
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
          {loader && <span className={s.preloader}><Preloader width={'30px'}/></span>}
          <div className={s.bottomRef} ref={bottomRef}></div>
        </div>
      </div>

      <div onClick={scrollToBottom}><AddMessageReduxForm onSubmit={onSubmit}/></div>
    </div>
  );
};


type PropsType = {
  dialogsPage: {
    dialogs: DialogsType
    messages: MessagesType
  }
  addMessage: (message: string) => void, userName: string, userPhoto: string
  addFriendMessage: () => void
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