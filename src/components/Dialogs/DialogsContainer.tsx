import React from 'react';
import {addMessage, onMessageChange} from '../../Redux/diologs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../Redux/redux-store';


// type PropsType = {
//     state: { dialogs: DialogsType, messages: MessagesType, newMessageText: string }
//     dispatch: (action: ActionType) => void
// }


let mapStateToProps = (state:AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.authMe.isAuth
    };
};


export const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    onMessageChange
})(Dialogs);


// export const DialogsContainer: React.FC = (props) => {
//
//     // const addMessage = () => {
//     //     const action = AddMessageTypeAC();
//     //     props.dispatch(action);
//     // };
//     //
//     // const onMessageChange = (text: string) => {
//     //     const action = updateNewMessageTextTypeAC(text);
//     //     props.dispatch(action);
//     // };
//     return (
//         <StoreContext.Consumer>{(store) => {
//             const addMessage = () => {
//                 const action = AddMessageTypeAC();
//                 store.dispatch(action);
//             };
//
//             const onMessageChange = (text: string) => {
//                 const action = updateNewMessageTextTypeAC(text);
//                 store.dispatch(action);
//             };
//             return (
//                 <Dialogs dialogs={store.getState().dialogsPage.dialogs} messages={store.getState().dialogsPage.messages}
//                          newMessageText={store.getState().dialogsPage.newMessageText} addMessage={addMessage}
//                          onMessageChange={onMessageChange}/>);
//         }}
//         </StoreContext.Consumer>
//     );
// };
