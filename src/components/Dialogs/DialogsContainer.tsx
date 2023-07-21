import React from 'react';
import {
    ActionType,
    DialogsType,
    MessagesType,
} from '../../Redux/Store';
import {AddMessageTypeAC, updateNewMessageTextTypeAC} from '../../Redux/diologs-reducer';
import {Dialogs} from './Dialogs';

type PropsType = {
    state: { dialogs: DialogsType, messages: MessagesType, newMessageText: string }
    dispatch: (action: ActionType) => void
}

export const DialogsContainer: React.FC<PropsType> = (props) => {

    const addMessage = () => {
        const action = AddMessageTypeAC();
        props.dispatch(action);
    };

    const onMessageChange = (text: string) => {
        const action = updateNewMessageTextTypeAC(text);
        props.dispatch(action);
    };
    return (
        <>
            <Dialogs dialogs={props.state.dialogs} messages={props.state.messages} newMessageText={props.state.newMessageText} addMessage={addMessage}
                     onMessageChange={onMessageChange} />
            </>
  )}