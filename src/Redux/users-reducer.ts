import {AppThunk} from './redux-store';
import {usersAPI} from '../api/Api';

let initialState: StateType = {
    users: [],
    pageSize: 20,
    totalUsesCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
export const usersReducers = (state: StateType = initialState, action: UsersReducerActionType): StateType => {
    switch (action.type) {
        case 'Users/FOLLOW_UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: action.followed} : el)
            };
        case 'SET_USERS':
            return {...state, users: [...action.users]};
        case 'SET_PAGES':
            return {...state, currentPage: action.page};
        case 'SET_TOTAL_COUNT':
            return {...state, totalUsesCount: action.count};
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching};
        }
        case 'FOLLOWING-IN-PROGRESS': {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        }
        default:
            return state;
    }

};

export const followUnfollow = (userId: number, followed: boolean) => ({
    type: 'Users/FOLLOW_UNFOLLOW',
    userId,
    followed
} as const);
export const setUsers = (users: UserType[]) => ({type: 'SET_USERS', users: users} as const);
export const setCurrentPage = (page: number) => ({type: 'SET_PAGES', page} as const);
export const setTotalCount = (count: number) => ({type: 'SET_TOTAL_COUNT', count} as const);

export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const);
export const followingInProgressAC = (userId: number, isFetching: boolean) => ({
    type: 'FOLLOWING-IN-PROGRESS',
    userId,
    isFetching
} as const);

export const getUsersTC = (currentPage: number, pageSize: number): AppThunk => async (dispatch, getState) => {
    dispatch(toggleIsFetching(true));
    let res = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(res.items));
    dispatch(setTotalCount(res.totalCount));
};

export const followUnfollowTC = (user: UserType, followed: boolean): AppThunk => async (dispatch, getState) => {
    dispatch(followingInProgressAC(user.id, true));
    let res;
    if (followed) {
        res = await usersAPI.followUsersApi(user);
    } else {
        res = await usersAPI.unfollowUsersApi(user);
    }
    if (res.data.resultCode === 0) {
        dispatch(followUnfollow(user.id, followed));
    }
    dispatch(followingInProgressAC(user.id, false));
};


export type UsersReducerActionType =
    ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof followingInProgressAC>
    | ReturnType<typeof followUnfollow>

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
type StateType = { users: UserType[], pageSize: number, totalUsesCount: number, currentPage: number, isFetching: boolean, followingInProgress: number[] }


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
