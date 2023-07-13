let rerenderEntireTree = (state:StateType) => {

};

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

export let state: StateType = {
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
};

export const addPost = () => {

    let newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0
    };
    // state = {...state, profilePage: {...state.profilePage, posts: [newPost, ...state.profilePage.posts]}}
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};


export const addMessage = () => {

    let newMessage: MassageType = {
        id: 5,
        message: state.dialogsPage.newMessageText
    };
    // state = {...state, dialogsPage: {...state.dialogsPage, messages: [newMessage, ...state.dialogsPage.messages ]}}
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};
export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
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