import {ActionType, PostsType, PostType} from './Store';

export type ProfileType = {
    'aboutMe': null | string,
    'contacts': {
        'facebook': null | string,
        'website': null | string,
        'vk': null | string,
        'twitter': null | string,
        'instagram': null | string,
        'youtube': null | string,
        'github': null | string,
        'mainLink': null | string
    },
    'lookingForAJob': boolean,
    'lookingForAJobDescription': any,
    'fullName': string,
    'userId': null,
    'photos': {
        'small': null | string,
        'large': null | string
    }
}

export type StateType = { posts: PostsType, newPostText: string, profile:  null|ProfileType }

export type AddPostTypeAT = { type: 'ADD-POST' }
export type  updateNewPostTextTypeAT = { type: 'UPDATE-NEW-POST-TEXT', newText: string }


const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState: StateType = {
    posts: [
        {id: 1, message: 'Hello world!', like: 4},
        {id: 2, message: 'Hi how are you?', like: 432},
        {id: 3, message: 'post 3', like: 32},
        {id: 4, message: 'Yo', like: 0}
    ],
    newPostText: '',
    profile: null
};
export const profileReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: state.posts.length,
                message: state.newPostText,
                like: 0
            };

            return {...state, posts: [newPost, ...state.posts], newPostText: ''};
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText};
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }

};
export const addPost = (): AddPostTypeAT => ({type: ADD_POST});
export const updateNewPostText = (text: string): updateNewPostTextTypeAT => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export type SetUserProfileAT = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = ( profile:ProfileType) => ({
    type: 'SET-USER-PROFILE',
    profile
} as const);