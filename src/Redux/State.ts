export type PostType = {
    id: number
    message: string
    like: number
}
export type PostsType = PostType[]

export type DialogType = {
    id: string
    name: string
    srs:string
}
export type DialogsType = DialogType[]

export type MassageType = {
    id: number
    message: string

}
export type MassagesType = MassageType[]

export type StateType = {
    profilePage: { posts: PostsType }
    dialogsPage: { dialogs: DialogsType, messages: MassagesType }

}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello world!', like: 4},
            {id: 2, message: 'Hi how are you?', like: 432},
            {id: 3, message: 'post 3', like: 32},
            {id: 3, message: 'Yo', like: 0}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Dimych', srs:"img/user5.png"},
            {id: '2', name: 'Andrew', srs:"img/user7.png"},
            {id: '3', name: 'Sveta', srs:"img/1761894.png"},
            {id: '4', name: 'Sasha', srs:"img/Sveta.png"},
            {id: '5', name: 'Valera', srs:"img/1067538.png"},
            {id: '6', name: 'Viktor', srs:"img/png-transparent-account-avatar-profile-user-avatars-icon.png"},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What are you doing'},
            {id: 3, message: 'Yo'}
        ],
    }
};

// let dialogs:DialogsType = [
//     {id: '1', name: 'Dimych'},
//     {id: '2', name: 'Andrew'},
//     {id: '3', name: 'Sveta'},
//     {id: '4', name: 'Sasha'},
//     {id: '5', name: 'Valera'},
//     {id: '6', name: 'Viktor'},
// ];
// let messages: MassagesType = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How are you?'},
//     {id: 3, message: 'What are you doing'},
//     {id: 3, message: 'Yo'}
// ];
//
// let posts: PostsType = [
//     {id: 1, message: 'Hello world!', like: 4},
//     {id: 2, message: 'Hi how are you?', like: 432},
//     {id: 3, message: 'post 3', like: 32},
//     {id: 3, message: 'Yo', like: 0}
// ];