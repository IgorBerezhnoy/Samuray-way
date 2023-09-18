import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {ProfilePageActionType, profileReducer} from './profile-reducer';
import {DialogsActionType, dialogsReducer} from './diologs-reducer';
import {navbarReducer} from './navbar-reducer';
import {UsersReducerActionType, usersReducers} from './users-reducer';
import {authReducer, AuthReducerActionType} from './auth-reducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from 'redux-form';


let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducers,
    authMe: authReducer,
    form:reducer
});

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store: RootStoreType = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export type RootStoreType = Store<AppRootStateType>
export type AppRootStateType = ReturnType<typeof rootReducers>

export type AppActionsType = ProfilePageActionType | DialogsActionType | UsersReducerActionType | AuthReducerActionType


export type ThunkType = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>
type DispatchFunc = () => ThunkType
export const useAppDispatch: DispatchFunc = useDispatch;

// @ts-ignore
window.store = store;