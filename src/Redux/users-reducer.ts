



export type FollowAT = { type: 'FOLLOW', userId: number }
export type UnfollowAT = { type: 'UNFOLLOW', userId: number }
export type SetUsersAT = { type: 'SETTERS', users: UserType[] }

export type ActionType = FollowAT | UnfollowAT|SetUsersAT

export type UserType = any
    // {
    // photos: string | undefined;
    // id: number,
    // src:string
    // followed: boolean,
    // name: string,
    // status: string,
    // location: {
    //     city: string,
    //     country: string
    // }
// }
type StateType = { users: UserType[] }


let initialState: StateType = {
    users: [
        // {
        //     id: 1,
        //     src: `${process.env.PUBLIC_URL}/img/user5.png`,
        //     followed: true,
        //     fullName: 'Dmitry',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus',}
        // },
        // {
        //     id: 2,
        //     src: `${process.env.PUBLIC_URL}/img/Sveta.png`,
        //     followed: true,
        //     fullName: 'Sasha',
        //     status: 'I like a football',
        //     location: {city: 'Moscow', country: 'Russia',}
        // },
        // {
        //     id: 3,
        //     src: `${process.env.PUBLIC_URL}/img/user7.png`,
        //     followed: false,
        //     fullName: 'Andrew',
        //     status: 'I am a boss too',
        //     location: {city: 'Kiev', country: 'Ukraine',}
        // },
    ]
};
export const usersReducers = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)};
        case 'UNFOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)};
            case 'SETTERS':
            return {...state, users: [...state.users,...action.users]};
        default:
            return state;
    }

};
export const followAC = (userId: number): FollowAT => ({type: 'FOLLOW', userId});
export const unfollowAC = (userId: number): UnfollowAT => ({type: 'UNFOLLOW', userId});
export const setUsersAC = (users: UserType[]):SetUsersAT  => ({type: 'SETTERS', users: users});