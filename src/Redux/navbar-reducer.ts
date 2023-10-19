export type navBarStateType = typeof initialState

let initialState = {
    navItems: [
        {name: 'Profile', navLink: `/profile/`, src: `${process.env.PUBLIC_URL}/img/navbarIcons/profile.png`},
        {name: 'Messages', navLink: '/dialogs' , src: `${process.env.PUBLIC_URL}/img/navbarIcons/dialogs.png`},
        {name: 'News', navLink: '/news' , src: `${process.env.PUBLIC_URL}/img/navbarIcons/news.png`},
        {name: 'Music', navLink: '/music' , src: `${process.env.PUBLIC_URL}/img/navbarIcons/music.png`},
        {name: 'Settings',navLink:'/settings', src: `${process.env.PUBLIC_URL}/img/navbarIcons/settings.png` },
        {name: 'Users', navLink: '/users' , src: `${process.env.PUBLIC_URL}/img/navbarIcons/users.png`}]
};

export type NavActionType = ReturnType<typeof setIDInNavbar>

export const navbarReducer = (state: navBarStateType = initialState, action: NavActionType) => {
    switch (action.type) {
        // case 'navbar/SET-ID': {
        //     return {
        //         ...state,
        //         navItems: state.navItems.map(el => el.name === 'Profile' ? {
        //             ...el,
        //             navLink: '/profile/' + action.id
        //         } : el)
        //     };
        // }
        default: {
            return state;
        }
    }

};
export const setIDInNavbar = (id: number) => ({type: 'navbar/SET-ID', id});
