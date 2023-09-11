import {AppThunk} from './redux-store';
import {AuthMeApi, formDateType} from '../api/Api';

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
            return {...state, ...action.state, isAuth: true, isFetching: true};
        }
        case 'LOGIN-DATE': {
            return {...state, isAuth: true, isFetching: true};
        }
        default:
            return state;
    }
};

export const setUserDateAC = (state: StateType) => {
    return {type: 'SET-USER-DATE', state} as const;
};
export const loginDateAC = () => {
    return {type: 'LOGIN-DATE'} as const;
};
type SetUserDateAT = ReturnType<typeof setUserDateAC>| ReturnType<typeof loginDateAC>


export const AuthMeTC = (): AppThunk => (dispatch, getState) => {
    AuthMeApi.me()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDateAC(res.data.data));
            }
        });

};
export const loginDateTC = (loginData:formDateType): AppThunk => (dispatch, getState) => {
    AuthMeApi.login(loginData)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDateAC(res.data.data));
                dispatch(loginDateAC());
            }
        });

};