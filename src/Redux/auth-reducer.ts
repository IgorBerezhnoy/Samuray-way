import {AppThunk} from './redux-store';
import {AuthMeApi, formDateType} from '../api/Api';
import {stopSubmit} from 'redux-form';

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
}
export type AuthReducerActionType = SetUserDateAT

let initialState: StateType = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
};
export const authReducer = (state: StateType = initialState, action: AuthReducerActionType): StateType => {
    switch (action.type) {
        case 'auth/SET-USER-DATE': {
            return {...state, ...action.state, isAuth: action.isAuth, isFetching: action.isFetching};
        }
        default:
            return state;
    }
};

export const setUserDateAC = (state: StateType, isAuth: boolean = false, isFetching: boolean = false) => {
    return {type: 'auth/SET-USER-DATE', state, isAuth, isFetching} as const;
};

type SetUserDateAT = ReturnType<typeof setUserDateAC>


export const authMeTC = (): AppThunk => async (dispatch) => {
    let res = await AuthMeApi.me();
    if (res.data.resultCode === 0) {
        dispatch(setUserDateAC(res.data.data, true, true));
    }

};
export const loginDateTC = (loginData: formDateType): AppThunk => async (dispatch) => {
    let res = await AuthMeApi.login(loginData);
    if (res.data.resultCode === 0) {
        dispatch(authMeTC());
        dispatch(setUserDateAC(res.data.data, true, true));
    } else {
        let message = res.data.messages[0] ? res.data.messages[0] : 'Some error';
        // @ts-ignore
        dispatch(stopSubmit('login', message));
    }
};
export const logOutTC = (): AppThunk => async (dispatch) => {
    let res = await AuthMeApi.logOut();
    if (res.data.resultCode === 0) {
        let dataNull = {
            id: null,
            login: null,
            email: null,
            isFetching: false,
            isAuth: false
        };
        dispatch(setUserDateAC(dataNull));
    }
};