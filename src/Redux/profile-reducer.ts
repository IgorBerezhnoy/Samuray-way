import {AppThunk} from './redux-store';
import {profileApi} from '../api/Api';
import {setIDInNavbar} from './navbar-reducer';


let initialState: ProfileReducerStateType = {
    posts: [
        {id: 1, message: 'Hello world!', like: 4},
        {id: 2, message: 'Hi how are you?', like: 432},
        {id: 3, message: 'post 3', like: 32},
        {id: 4, message: 'Yo', like: 0}
    ],
    profile: null,
    status: ''
};
export const profileReducer = (state: ProfileReducerStateType = initialState, action: ProfilePageActionType): ProfileReducerStateType => {
    switch (action.type) {
        case 'profile/ADD-POST':
            let newPost: PostType = {
                id: state.posts.length,
                message: action.post,
                like: 0
            };

            return {...state, posts: [newPost, ...state.posts]};
        case 'profile/CLEAR_POST': {
            return {...state, posts: state.posts.filter(el => el.id !== action.id)};
        }
        case 'profile/SET-USER-PROFILE': {
            return {...state, profile: action.profile};
        }
        case 'profile/SET-USER-STATUS': {
            return {...state, status: action.status};
        }
        case 'profile/UPDATE-USER-STATUS': {
            return {...state, status: action.status};
        }
        case 'profile/SAVE-PHOTO':{
            debugger
            // @ts-ignore
            return {...state, profile:{...state.profile,photos:{...state.profile.photos,small:action.file}}}
        }
        default:
            return state;
    }

};
export const addPost = (post: string): AddPostTypeAT => ({type: 'profile/ADD-POST', post});
export const clearPost = (id: number) => ({type: 'profile/CLEAR_POST', id} as const);


export const setUserProfileAC = (profile: ProfileType) => ({type: 'profile/SET-USER-PROFILE', profile} as const);
export const setUserStatusAC = (status: string) => ({type: 'profile/SET-USER-STATUS', status} as const);
export const updateUserStatusAC = (status: string) => ({type: 'profile/UPDATE-USER-STATUS', status} as const);
export const savePhotoSuccess = (file: File) => ({type: 'profile/SAVE-PHOTO', file} as const);


export const setUserProfileTC = (userId: string): AppThunk => async (dispatch) => {
    setIDInNavbar(Number(userId));
    let res = await profileApi.getProfile(userId);
    dispatch(setUserProfileAC(res.data));
};
export const setUserStatusTC = (userId: string): AppThunk => async (dispatch) => {
    let res = await profileApi.getUserStatus(userId);
    dispatch(setUserStatusAC(res.data));
};
export const updateStatusTC = (status: string): AppThunk => async (dispatch) => {
    let res = await profileApi.updateStatus(status);
    if (res.data.reasultCode === 0) {
        dispatch(updateUserStatusAC(status));
    }
};
export const savePhoto = (photo:File): AppThunk => async (dispatch) => {
    let res = await profileApi.savePhoto(photo);
    console.log(res.data.reasultCode);
    if (res.data.reasultCode === 0) {
        debugger
        dispatch(savePhotoSuccess(photo));
    }
};

export type SetUserProfileAT = ReturnType<typeof setUserProfileAC>
export type ProfilePageActionType =
    AddPostTypeAT
    | updateNewPostTextTypeAT
    | SetUserProfileAT
    | ReturnType<typeof setUserStatusAC> | ReturnType<typeof updateUserStatusAC> | ReturnType<typeof clearPost>| ReturnType<typeof savePhotoSuccess>


export type PostType = {
    id: number
    message: string
    like: number
}
export type PostsType = PostType[]
export type ProfileReducerStateType = {
    posts: PostType[],
    profile: null | ProfileType,
    status: string
}

export type AddPostTypeAT = { type: 'profile/ADD-POST', post: string }
export type  updateNewPostTextTypeAT = { type: 'profile/UPDATE-NEW-POST-TEXT', newText: string }


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
    'userId': number | null,
    status: string,
    'photos': {
        'small': any,
        'large': any
    }
}