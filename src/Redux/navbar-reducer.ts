import {ActionType} from './Store';
type StateType= { navItems: string[]  }

let initialState= {
        navItems: ['Profile', 'Messages', 'News', 'Music', 'Settings', "Users"]
}
export const navbarReducer=(state:StateType=initialState,action:ActionType)=>{
    return state
}