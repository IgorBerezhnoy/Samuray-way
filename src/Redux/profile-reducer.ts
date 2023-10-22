import {AppThunk} from './redux-store';
import {formDateDomainType, profileApi} from '../api/Api';
import {setIDInNavbar} from './navbar-reducer';
import {stopSubmit} from 'redux-form';


let initialState: ProfileReducerStateType = {
  posts: [
    {id: 1, message: 'Hello world!', like: 4, timeAgo: 'hour ago'},
    {id: 2, message: 'Hi how are you?', like: 432, timeAgo: 'two days ago'},
    {
      id: 3,
      message: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias ' +
        'aliquam asperiores delectus dolore doloremque doloribus eum fuga iure nam natus neque officia praesentium quisquam reprehenderit tempora, temporibus veniam, vero.',
      like: 32, timeAgo: 'last week'
    },
    {id: 4, message: 'It is my first post', like: 0, timeAgo: 'two weeks ago'}
  ],
  profile: null,
  status: '',
  backgrounds: [`${process.env.PUBLIC_URL}/img/background/backGraund1.jpg`, `${process.env.PUBLIC_URL}/img/background/backGraund2.jpg`, `${process.env.PUBLIC_URL}/img/background/backGraund3.jpg`,
    `${process.env.PUBLIC_URL}/img/background/backGraund4.jpg`, `${process.env.PUBLIC_URL}/img/background/backGraund5.jpg`, `${process.env.PUBLIC_URL}/img/background/backGraund6.jpg`,]
};
export const profileReducer = (state: ProfileReducerStateType = initialState, action: ProfilePageActionType): ProfileReducerStateType => {
  switch (action.type) {
    case 'profile/ADD-POST':

      let newPost: PostType = {
        id: state.posts.length,
        message: action.post,
        like: 0,
        timeAgo: 'now'
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
    case 'profile/UPDATE-USER-INFO': {
      // @ts-ignore
      return {...state, profile: {...state.profile, ...action.profileInfo}};
    }
    case 'profile/SAVE-PHOTO': {
      return {
        // @ts-ignore
        ...state, profile: {
          ...state.profile,
          // @ts-ignore
          photos: {...state.profile.photos, small: action.photos.small, large: action.photos.large}
        }
      };
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
export const savePhotoSuccess = (photos: PhotoDomainType) => ({type: 'profile/SAVE-PHOTO', photos} as const);
export const updateProfileInfoAC = (profileInfo: formDateDomainType) => ({
  type: 'profile/UPDATE-USER-INFO',
  profileInfo
} as const);


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
export const updateProfileInfoTC = (profileInfo: formDateDomainType): AppThunk => async (dispatch) => {
  let res = await profileApi.updateProfileInfo(profileInfo);
  if (res.data.resultCode === 0) {
    dispatch(updateProfileInfoAC(profileInfo));
    return res;
  } else {
    let message = res.data.messages[0] ? res.data.messages[0] : 'Some error';
    // @ts-ignore
    // dispatch(stopSubmit('userInfoForm', {"contacts": {"facebook":message}}));
    dispatch(stopSubmit('userInfoForm', {_error: message}));
  }
};
export const savePhoto = (photo: File): AppThunk => async (dispatch) => {
  let res = await profileApi.savePhoto(photo);
  if (res.data.resultCode === 0) {
    dispatch(savePhotoSuccess(res.data.data.photos));
  }
};

export type SetUserProfileAT = ReturnType<typeof setUserProfileAC>
export type ProfilePageActionType =
  AddPostTypeAT
  | updateNewPostTextTypeAT
  | SetUserProfileAT
  | ReturnType<typeof setUserStatusAC> | ReturnType<typeof updateUserStatusAC> | ReturnType<typeof clearPost>
  | ReturnType<typeof savePhotoSuccess> | ReturnType<typeof updateProfileInfoAC>


export type PostType = {
  id: number
  message: string
  like: number
  timeAgo: string
}
export type PostsType = PostType[]
export type ProfileReducerStateType = {
  posts: PostType[],
  profile: null | ProfileType,
  status: string
  backgrounds: string[]
}
export type PhotoDomainType = { large: string, small: string };


export type AddPostTypeAT = { type: 'profile/ADD-POST', post: string }
export type  updateNewPostTextTypeAT = { type: 'profile/UPDATE-NEW-POST-TEXT', newText: string }


export type ProfileType = {
  'photos': PhotoDomainType
  status: string,
  'userId': number | null | string,
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
  'lookingForAJobDescription': string,
  'fullName': string,

}


//
