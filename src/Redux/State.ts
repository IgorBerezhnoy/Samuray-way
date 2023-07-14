export type PostType = {
    id: number
    message: string
    like: number
}
export type PostsType = PostType[]

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
export type MassagesType = MassageType[]

export type StateType = {
    profilePage: { posts: PostsType, newPostText: string }
    dialogsPage: { dialogs: DialogsType, messages: MassagesType, newMessageText: string }
    navbar: { navItems: string[] }
}

export type ActionType = AddPostTypeAT | AddMessageTypeAT | updateNewPostTextTypeAT | updateNewMessageTextTypeAT


type AddPostTypeAT = { type: 'ADD-POST' }
type AddMessageTypeAT = { type: 'ADD-MESSAGE' }
type  updateNewPostTextTypeAT = { type: 'UPDATE-NEW-POST-TEXT', newText: string }
type  updateNewMessageTextTypeAT = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: string }


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world!', like: 4},
                {id: 2, message: 'Hi how are you?', like: 432},
                {id: 3, message: 'post 3', like: 32},
                {id: 3, message: 'Yo', like: 0}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        navbar: {
            navItems: ['Profile', 'Messages', 'News', 'Music', 'Settings']
        }
    },
    _callSubscriber(state: StateType) {
        console.log(state)
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => any) {
        this._callSubscriber = observer;
    },




    dispatch(action: ActionType) {

        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            // state = {...state, profilePage: {...state.profilePage, posts: [newPost, ...state.profilePage.posts]}}
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MassageType = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);

        }else {
            console.error("New Error");
        }
    }


};
// window.store=store
// export let state: StateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hello world!', like: 4},
//             {id: 2, message: 'Hi how are you?', like: 432},
//             {id: 3, message: 'post 3', like: 32},
//             {id: 3, message: 'Yo', like: 0}
//         ],
//         newPostText: ''
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: '1', name: 'Dimych', srs: `${process.env.PUBLIC_URL}/img/user5.png`},
//             {id: '2', name: 'Andrew', srs: `${process.env.PUBLIC_URL}/img/user7.png`},
//             {id: '3', name: 'Sveta', srs: `${process.env.PUBLIC_URL}/img/1761894.png`},
//             {id: '4', name: 'Sasha', srs: `${process.env.PUBLIC_URL}/img/Sveta.png`},
//             {id: '5', name: 'Valera', srs: `${process.env.PUBLIC_URL}/img/1067538.png`},
//             {
//                 id: '6',
//                 name: 'Viktor',
//                 srs: `${process.env.PUBLIC_URL}/img/png-transparent-account-avatar-profile-user-avatars-icon.png`
//             },
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How are you?'},
//             {id: 3, message: 'What are you doing'},
//             {id: 3, message: 'Yo'}
//         ],
//         newMessageText: ''
//     },
//     navbar: {
//         navItems: ['Profile', 'Messages', 'News', 'Music', 'Settings']
//     }
// };



// addPost() {
//     let newPost: PostType = {
//         id: 5,
//         message: this._state.profilePage.newPostText,
//         like: 0
//     };
//     // state = {...state, profilePage: {...state.profilePage, posts: [newPost, ...state.profilePage.posts]}}
//     this._state.profilePage.posts.unshift(newPost);
//     this._state.profilePage.newPostText = '';
//     this._callSubscriber(this._state);
// },
// addMessage() {
//
//     let newMessage: MassageType = {
//         id: 5,
//         message: this._state.dialogsPage.newMessageText
//     };
//     // state = {...state, dialogsPage: {...state.dialogsPage, messages: [newMessage, ...state.dialogsPage.messages ]}}
//     this._state.dialogsPage.messages.push(newMessage);
//     this._state.dialogsPage.newMessageText = '';
//     this._callSubscriber(this._state);
// },
// updateNewPostText(newText: string) {
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber(this._state);
// // },
// updateNewMessageText(newText: string) {
//     this._state.dialogsPage.newMessageText = newText;
//     this._callSubscriber(this._state);
// },
// export const updateNewMessageText = (newText: string) => {
//     state.dialogsPage.newMessageText = newText;
//     rerenderEntireTree(state);
// };
//
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer;
// };

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