import React from 'react';
import {
    ActionType,
    DialogsType,
    MessagesType,
} from '../../Redux/Store';
import {AddMessageTypeAC, updateNewMessageTextTypeAC} from '../../Redux/diologs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';
// type PropsType = {
//     state: { dialogs: DialogsType, messages: MessagesType, newMessageText: string }
//     dispatch: (action: ActionType) => void
// }

export const DialogsContainer: React.FC = (props) => {

    // const addMessage = () => {
    //     const action = AddMessageTypeAC();
    //     props.dispatch(action);
    // };
    //
    // const onMessageChange = (text: string) => {
    //     const action = updateNewMessageTextTypeAC(text);
    //     props.dispatch(action);
    // };
    return (
        <StoreContext.Consumer>{(store) => {
            const addMessage = () => {
                const action = AddMessageTypeAC();
                store.dispatch(action);
            };

            const onMessageChange = (text: string) => {
                const action = updateNewMessageTextTypeAC(text);
                store.dispatch(action);
            };
            return (
                <Dialogs dialogs={store.getState().dialogsPage.dialogs} messages={store.getState().dialogsPage.messages}
                         newMessageText={store.getState().dialogsPage.newMessageText} addMessage={addMessage}
                         onMessageChange={onMessageChange}/>);
        }}
        </StoreContext.Consumer>
    );
};