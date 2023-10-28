import {getEditedTime} from '../utils/getTime';

let initialState: StateType = {
  dialogs: [
    {id: '1', name: 'Dimych', srs: `${process.env.PUBLIC_URL}/img/user5.png`,},
    {id: '2', name: 'Andrew', srs: `${process.env.PUBLIC_URL}/img/user7.png`,},
    {id: '3', name: 'Sveta', srs: `${process.env.PUBLIC_URL}/img/1761894.png`,},
    {id: '4', name: 'Sasha', srs: `${process.env.PUBLIC_URL}/img/Sveta.png`,},
    {id: '5', name: 'Valera', srs: `${process.env.PUBLIC_URL}/img/1067538.png`,},
    {
      id: '6', name: 'Viktor',
      srs: `${process.env.PUBLIC_URL}/img/png-transparent-account-avatar-profile-user-avatars-icon.png`
    },
  ],
  messages: [
    {id: 1, message: 'Hi', time: '18:12', userId: '0'},
    {id: 2, message: 'Hello', time: '18:10', userId: '1'},
    {id: 3, message: 'How are you?', time: '18:14', userId: '1'},
    {id: 4, message: 'Good, and you?', time: '18:15', userId: '0'},
    {id: 5, message: 'I am fine. What are you doing', time: '18:18', userId: '1'},
  ],
};
export const dialogsReducer = (state: StateType = initialState, action: DialogsActionType): StateType => {
  switch (action.type) {
    case 'dialogs/ADD-MESSAGE':
      let newMessage: MassageType = {
        id: state.messages.length,
        message: action.message,
        time: getEditedTime(),
        userId: '0'
      };
      let newFriendsMessage: MassageType = {
        id: state.messages.length,
        message: 'It\'s very good',
        time: getEditedTime(),
        userId: '1'
      };
      return {
        ...state,
        messages: [...state.messages, newMessage, newFriendsMessage],
      };

    default:
      return state;
  }


};
export const addMessage = (message: string, userId: string) => ({type: 'dialogs/ADD-MESSAGE', message, userId});


export type DialogType = {
  id: string, name: string, srs: string,

}
export type DialogsType = DialogType[]

export type MassageType = {
  id: number
  message: string, time: string, userId: string
}
export type MessagesType = MassageType[]

export type AddMessageTypeAT = ReturnType<typeof addMessage>
export type  updateNewMessageTextTypeAT = { type: 'dialogs/UPDATE-NEW-MESSAGE-TEXT', newText: string }

export type StateType = {
  dialogs: DialogsType
  messages: MessagesType,
}
export type DialogsActionType = AddMessageTypeAT
