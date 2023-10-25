let initialState = {
  dialogs: [
    {
      id: '1', name: 'Dimych', srs: `${process.env.PUBLIC_URL}/img/user5.png`,
      outgoingMessages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine. What are you doing'},
      ],
      incomingMessages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Good, and you?'},
      ]
    },
    {
      id: '2', name: 'Andrew', srs: `${process.env.PUBLIC_URL}/img/user7.png`,
      outgoingMessages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine. What are you doing'},
      ],
      incomingMessages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Good, and you?'},]
    },
    {
      id: '3', name: 'Sveta', srs: `${process.env.PUBLIC_URL}/img/1761894.png`,
      outgoingMessages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine. What are you doing'},
      ],
      incomingMessages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Good, and you?'},
      ]
    },
    {
      id: '4', name: 'Sasha', srs: `${process.env.PUBLIC_URL}/img/Sveta.png`,
      outgoingMessages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine. What are you doing'},
      ],
      incomingMessages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Good, and you?'},
      ]
    },
    {
      id: '5', name: 'Valera', srs: `${process.env.PUBLIC_URL}/img/1067538.png`,
      outgoingMessages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine. What are you doing'},
      ],
      incomingMessages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Good, and you?'},
      ]
    },
    {
      id: '6',
      name: 'Viktor',
      srs: `${process.env.PUBLIC_URL}/img/png-transparent-account-avatar-profile-user-avatars-icon.png`,
      outgoingMessages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine. What are you doing'},
      ],
      incomingMessages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Good, and you?'},
      ]


    },
  ],
};

export const dialogsReducer = (state: StateType = initialState, action: DialogsActionType): StateType => {
  switch (action.type) {
    case 'dialogs/ADD-MESSAGE':
      let newMessage: MassageType = {
        id: state.dialogs.find(el => el.id === action.userId)!.incomingMessages.length,
        message: action.message
      };
      return {...state,
        dialogs: state.dialogs.map(el => el.id === action.userId ? {
          ...el,
          incomingMessages: [...el.incomingMessages, newMessage]
        } : el)
      };

    default:
      return state;
  }


};
export const addMessage = (message: string, userId: string) => ({type: 'dialogs/ADD-MESSAGE', message, userId});


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

export type AddMessageTypeAT = ReturnType<typeof addMessage>
export type  updateNewMessageTextTypeAT = { type: 'dialogs/UPDATE-NEW-MESSAGE-TEXT', newText: string }

type StateType = typeof initialState
export type DialogsActionType = AddMessageTypeAT
