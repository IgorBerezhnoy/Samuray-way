export type navBarStateType = typeof initialState

let initialState = {
    navItems: [
        {name: 'Profile', navLink: `/profile/`},
        {name: 'Messages', navLink: '/dialogs'},
        {name: 'News', navLink: '/news'},
        {name: 'Music', navLink: '/music'},
        {name: 'Settings',navLink:'/settings' },
        {name: 'Users', navLink: '/users'}]
};

export type NavActionType = ReturnType<typeof setIDInNavbar>

export const navbarReducer = (state: navBarStateType = initialState, action: NavActionType) => {
    switch (action.type) {
        case 'navbar/SET-ID': {
            return {
                ...state,
                navItems: state.navItems.map(el => el.name === 'Profile' ? {
                    ...el,
                    navLink: '/profile/' + action.id
                } : el)
            };
        }
        default: {
            return state;
        }
    }

};
export const setIDInNavbar = (id: number) => ({type: 'navbar/SET-ID', id});
