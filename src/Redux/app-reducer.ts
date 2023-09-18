import {authMeTC} from './auth-reducer';
import {AppThunk} from './redux-store';


let initialState = {
isInitialized:false
};
export const appReducer = (state :StateType= initialState, action: AppReducerActionType): StateType => {
    switch (action.type) {
        case 'SET-INITIALIZED': {
            return {...state, isInitialized: action.isInitialized};
        }
        default:
            return state;
    }
};

export const setInitializedAC = (isInitialized:boolean) => {
    return {type: 'SET-INITIALIZED', isInitialized} as const;
};

//
//
export const setInitializedTC = (): AppThunk => (dispatch, getState) => {
    Promise.all([dispatch(authMeTC())])
        .then(()=>{
                dispatch(setInitializedAC( true));
    })


};

export type StateType = typeof initialState
export type AppReducerActionType =ReturnType <typeof setInitializedAC>
