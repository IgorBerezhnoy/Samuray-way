
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let initialState= {
        dialogs: [
            {id: '1', name: 'Dimych', srs: `${process.env.PUBLIC_URL}/img/user5.png`},
            {id: '2', name: 'Andrew', srs: `${process.env.PUBLIC_URL}/img/user7.png`},
            {id: '3', name: 'Sveta', srs: `${process.env.PUBLIC_URL}/img/1761894.png`},
            {id: '4', name: 'Sasha', srs: `${process.env.PUBLIC_URL}/img/Sveta.png`},
            {id: '5', name: 'Valera', srs: `${process.env.PUBLIC_URL}/img/1067538.png`},
            {
                id: '6',
                name: 'Viktor',
                srs: `${process.env.PUBLIC_URL}/img/png-transparent-account-avatar-profile-user-avatars-icon.png`
            },
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What are you doing'},
            {id: 3, message: 'Yo'}
        ],
        newMessageText: ''
}
export const dialogsReducer = (state:StateType=initialState, action: ActionType):StateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MassageType = {
                id: state.messages.length,
                message: state.newMessageText
            };

            return {...state,messages:[...state.messages,newMessage],newMessageText:""}
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state,newMessageText:action.newText}
        default:
            return state
    }


};
export const addMessage = (): AddMessageTypeAT => ({type: ADD_MESSAGE});
export const onMessageChange = (text: string): updateNewMessageTextTypeAT => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});





export type DialogType = {
    id: string
    name: string
    srs: string
}
export type DialogsType = DialogType[]

export type MassageType = {
    id: number
    message: string

}
export type MessagesType = MassageType[]

export type AddMessageTypeAT = { type: 'ADD-MESSAGE' }
export type  updateNewMessageTextTypeAT = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: string }

type StateType = { dialogs: DialogsType, messages: MessagesType, newMessageText: string  }
export type ActionType =  AddMessageTypeAT |updateNewMessageTextTypeAT
