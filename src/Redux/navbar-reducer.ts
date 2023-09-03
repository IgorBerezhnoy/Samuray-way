
type StateType= { navItems: string[]  }

let initialState= {
        navItems: ['Profile', 'Messages', 'News', 'Music', 'Settings', "Users"]
}

export type NavActionType ={
}

export const navbarReducer=(state:StateType=initialState,action:NavActionType)=>{
    return state
}