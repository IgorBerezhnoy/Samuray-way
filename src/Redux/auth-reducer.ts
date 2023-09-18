import {AppThunk} from './redux-store';
import {AuthMeApi, formDateType} from '../api/Api';
import {stopSubmit} from 'redux-form';
import {setInitializedAC} from './app-reducer';

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
        case 'SET-USER-DATE': {
            return {...state, ...action.state, isAuth: action.isAuth, isFetching: action.isFetching};
        }
        default:
            return state;
    }
};

export const setUserDateAC = (state: StateType, isAuth: boolean, isFetching: boolean) => {
    return {type: 'SET-USER-DATE', state, isAuth, isFetching} as const;
};

type SetUserDateAT = ReturnType<typeof setUserDateAC>


export const authMeTC = (): AppThunk => (dispatch, getState) => {
    return  AuthMeApi.me()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDateAC(res.data.data, true, true));
            }
        })


};
export const loginDateTC = (loginData: formDateType): AppThunk => (dispatch, getState) => {
    AuthMeApi.login(loginData)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(authMeTC())
                dispatch(setUserDateAC(res.data.data, true, true));
            }else {
                let message=res.data.messages[0]?res.data.messages[0]:"Some error"
                // @ts-ignore
                dispatch(stopSubmit('login', message));
    //
            }
        });
};
export const logOutTC = (): AppThunk => (dispatch, getState) => {
    console.log('aaaaaa');
    AuthMeApi.logOut()
        .then((res) => {
            if (res.data.resultCode === 0) {
                let dataNull = {
                    id: null,
                    login: null,
                    email: null,
                    isFetching: false,
                    isAuth: false
                };
                dispatch(setUserDateAC(dataNull, false, false));
            }
        });
};