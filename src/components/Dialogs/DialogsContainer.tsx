import React from 'react';
import {AddMessageTypeAC, updateNewMessageTextTypeAC} from '../../Redux/diologs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {ActionType} from '../../Redux/Store';


// type PropsType = {
//     state: { dialogs: DialogsType, messages: MessagesType, newMessageText: string }
//     dispatch: (action: ActionType) => void
// }


let mapStateToProps = (state:RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    };
};
let mapDispatchToProps = (dispatch:(action: ActionType) => void) => {
    return {
        addMessage: () => {
            const action = AddMessageTypeAC();
          dispatch(action);
        },
        onMessageChange: (text:string) => {
            const action = updateNewMessageTextTypeAC(text);
    dispatch(action);
        }
    };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


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
