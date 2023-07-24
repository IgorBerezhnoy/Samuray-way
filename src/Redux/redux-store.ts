import {combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './diologs-reducer';
import {navbarReducer} from './navbar-reducer';

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    navbar: navbarReducer
});




export let store: RootStoreType = createStore(reducers);

export type RootStoreType = Store<RootStateType>
export type RootStateType = ReturnType<typeof reducers>
