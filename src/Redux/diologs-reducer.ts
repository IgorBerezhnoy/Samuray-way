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
  friendMessages: [
    {id: 1, message: 'Hello', time:"18:10"},
    {id: 2, message: 'How are you?', time:"18:14"},
    {id: 3, message: 'I am fine. What are you doing', time:"18:18"},
  ],
  myMessages: [
    {id: 1, message: 'Hi', time:"18:12"},
    {id: 2, message: 'Good, and you?',time:"18:15"},
  ]
};

export const dialogsReducer = (state: StateType = initialState, action: DialogsActionType): StateType => {
  switch (action.type) {
    case 'dialogs/ADD-MESSAGE':
      let newMessage: MassageType = {
        id: state.myMessages.length,
        message: action.message,
        time:getEditedTime()
      };
      return {
        ...state,myMessages:[...state.myMessages,newMessage]
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
  message: string, time:string
}
export type MessagesType = MassageType[]

export type AddMessageTypeAT = ReturnType<typeof addMessage>
export type  updateNewMessageTextTypeAT = { type: 'dialogs/UPDATE-NEW-MESSAGE-TEXT', newText: string }

export type StateType = {
  dialogs: DialogsType
  friendMessages: MessagesType,
  myMessages: MessagesType
}
export type DialogsActionType = AddMessageTypeAT
