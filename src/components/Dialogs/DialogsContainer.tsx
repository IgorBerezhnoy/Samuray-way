import React from 'react';
import {addMessage} from '../../Redux/diologs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../Redux/redux-store';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';


// type PropsType = {
//     state: { dialogs: DialogsType, messages: MessagesType, newMessageText: string }
//     dispatch: (action: ActionType) => void
// }
let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};



export default compose<React.ComponentType>(connect(mapStateToProps, {
    addMessage
}),WithAuthRedirect)(Dialogs)



// export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, {
//     addMessage,
//     onMessageChange
// })(Dialogs));


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
