import {combineReducers, compose, createStore, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './diologs-reducer';
import {navbarReducer} from './navbar-reducer';
import {usersReducers} from './users-reducer';
import {authReducer} from './auth-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducers,
    authMe: authReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export let store: RootStoreType = createStore(reducers, composeEnhancers());

export type RootStoreType = Store<RootStateType>
export type RootStateType = ReturnType<typeof reducers>


// @ts-ignore
window.store = store;