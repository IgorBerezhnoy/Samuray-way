export type FollowAT = { type: 'FOLLOW', userId: number }
export type UnfollowAT = { type: 'UNFOLLOW', userId: number }
export type SetUsersAT = { type: 'SET_USERS', users: UserType[] }
export type SetCurrentPageAT = { type: 'SET_PAGES', page: number }
export type SetTotalCountAT = { type: 'SET_TOTAL_COUNT', count: number }
export type toggleIsFetchingAT=ReturnType<typeof toggleIsFetching>

export type ActionType = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalCountAT |toggleIsFetchingAT

export type UserType = {
    'name': string,
    'id': number,
    'uniqueUrlName': any,
    'photos': {
        'small': any,
        'large': any
    },
    'status': any,
    'followed': boolean
}
type StateType = { users: UserType[], pageSize: number, totalUsesCount: number, currentPage: number, isFetching: boolean }


let initialState: StateType = {
    users: [],
    pageSize: 20,
    totalUsesCount: 20,
    currentPage: 1,
    isFetching: false
};
export const usersReducers = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)};
        case 'UNFOLLOW':
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)};
        case 'SET_USERS':
            return {...state, users: [...action.users]};
        case 'SET_PAGES':
            return {...state, currentPage: action.page};
        case 'SET_TOTAL_COUNT':
            return {...state, totalUsesCount: action.count};
        case 'TOGGLE-IS-FETCHING':{
            return {...state,isFetching:action.isFetching}
        }
        default:
            return state;
    }

};
export const follow = (userId: number): FollowAT => ({type: 'FOLLOW', userId});
export const unfollow = (userId: number): UnfollowAT => ({type: 'UNFOLLOW', userId});
export const setUsers = (users: UserType[]): SetUsersAT => ({type: 'SET_USERS', users: users});
export const setCurrentPage = (page: number): SetCurrentPageAT => ({type: 'SET_PAGES', page});
export const setTotalCount = (count: number): SetTotalCountAT => ({type: 'SET_TOTAL_COUNT', count});

export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const);


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
