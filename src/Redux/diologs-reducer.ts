
let initialState = {
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
};
export const dialogsReducer = (state: StateType = initialState, action: DialogsActionType): StateType => {
    switch (action.type) {
        case 'dialogs/ADD-MESSAGE':
            let newMessage: MassageType = {
                id: state.messages.length,
                message: action.message
            };

            return {...state, messages: [...state.messages, newMessage]};

        default:
            return state;
    }


};
export const addMessage = (message: string): AddMessageTypeAT => ({type: "dialogs/ADD-MESSAGE", message});


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

export type AddMessageTypeAT = { type: 'dialogs/ADD-MESSAGE', message: string }
export type  updateNewMessageTextTypeAT = { type: 'dialogs/UPDATE-NEW-MESSAGE-TEXT', newText: string }

type StateType = { dialogs: DialogsType, messages: MessagesType }
export type DialogsActionType = AddMessageTypeAT
