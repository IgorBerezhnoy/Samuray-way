import {AppThunk} from './redux-store';
import {profileApi} from '../api/Api';

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
    profile: null,
    profilePage: null,
    status: ''
};
export const profileReducer = (state: StateType = initialState, action: ProfilePageActionType): StateType => {
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
        case 'SET-USER-STATUS': {
            return {...state, status: action.status};
        }
        case 'UPDATE-USER-STATUS': {
            return {...state, status: action.status};
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

export const setUserProfileAC = (profile: ProfileType) => ({
    type: 'SET-USER-PROFILE',
    profile
} as const);
export const setUserStatusAC = (status: string) => ({
    type: 'SET-USER-STATUS',
    status
} as const);
export const updateUserStatusAC = (status: string) => ({
    type: 'UPDATE-USER-STATUS',
    status
} as const);

export const setUserProfileTC = (userId: string = '29562'): AppThunk => (dispatch) => {
    profileApi.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data));
        });
};
export const setUserStatusTC = (userId: string= '29562'): AppThunk => (dispatch) => {

    profileApi.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatusAC(response.data));
        });
};
export const updateStatusTC = (status: string): AppThunk => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.reasultCode===0){
            dispatch(updateUserStatusAC(status));
            }
        });
};

export type SetUserProfileAT = ReturnType<typeof setUserProfileAC>
export type ProfilePageActionType =
    AddPostTypeAT
    | updateNewPostTextTypeAT
    | SetUserProfileAT
    | ReturnType<typeof setUserStatusAC> | ReturnType<typeof updateUserStatusAC>


export type PostType = {
    id: number
    message: string
    like: number
}
export type PostsType = PostType[]
export type StateType = {
    profilePage: null | ProfileType;
    posts: PostType[],
    newPostText: string,
    profile: null | ProfileType,
    status: string
}

export type AddPostTypeAT = { type: 'ADD-POST' }
export type  updateNewPostTextTypeAT = { type: 'UPDATE-NEW-POST-TEXT', newText: string }


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
    status: string,
    'photos': {
        'small': null | string,
        'large': null | string
    }
}