import {AppThunk} from './redux-store';
import {authMeApi, formDateType, securityApi} from '../api/Api';
import {stopSubmit} from 'redux-form';

let initialState: StateType = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
  captcha: null
};
export const authReducer = (state: StateType = initialState, action: AuthReducerActionType): StateType => {
  switch (action.type) {
    case 'auth/SET-USER-DATE': {
      return {...state, ...action.state, isAuth: action.isAuth, isFetching: action.isFetching};
    }
    case 'auth/GET-CAPTCHA': {
      return {...state, captcha: action.captcha};
    }
    default:
      return state;
  }
};

export const setUserDateAC = (state: StateType, isAuth: boolean = false, isFetching: boolean = false) => {
  return {type: 'auth/SET-USER-DATE', state, isAuth, isFetching} as const;
};
export const getCaptchaSuccess = (captcha: string | null) => {
  return {type: 'auth/GET-CAPTCHA', captcha} as const;
};

type SetUserDateAT = ReturnType<typeof setUserDateAC>


export const authMeTC = (): AppThunk => async (dispatch) => {
  let res = await authMeApi.me();
  if (res.data.resultCode === 0) {
    dispatch(setUserDateAC(res.data.data, true, true));
  }

};
export const loginDateTC = (loginData: formDateType): AppThunk => async (dispatch) => {
  let res = await authMeApi.login(loginData);
  if (res.data.resultCode === 0) {
    await dispatch(authMeTC());
    dispatch(setUserDateAC(res.data.data, true, true));
  } else {
    if (res.data.resultCode===10){
       dispatch(getCaptcha())
    }
    let message = res.data.messages[0] ? res.data.messages[0] : 'Some error';
    // @ts-ignore
    dispatch(stopSubmit('login', message));
  }
};
export const getCaptcha = (): AppThunk => async (dispatch) => {
  const res = await securityApi.getCaptcha();
  dispatch(getCaptchaSuccess(res.data.url));
};
export const logOutTC = (): AppThunk => async (dispatch) => {
  let res = await authMeApi.logOut();
  if (res.data.resultCode === 0) {
    let dataNull = {
      id: null,
      login: null,
      email: null,
      isFetching: false,
      isAuth: false,
      captcha: null
    };
    dispatch(setUserDateAC(dataNull));
  }
};

export type AuthResType = {
  data: StateType,
  'messages': string,
  'fieldsErrors': string,
  'resultCode': number
}

export type StateType = {
  id: number | null,
  login: string | null,
  email: string | null
  isFetching: boolean,
  isAuth: boolean
  captcha: string | null
}
export type AuthReducerActionType = SetUserDateAT | ReturnType<typeof getCaptchaSuccess>
