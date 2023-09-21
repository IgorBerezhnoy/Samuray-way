import {AppRootStateType} from './redux-store';
import {createSelector} from 'reselect';
import {UserType} from './users-reducer';


export const getUsers = (state: AppRootStateType) => {
    return state.usersPage.users;
};
export const getUsersSuperSelector = createSelector(getUsers,(users: UserType[]) => {
    return users.filter(el=>el)
})
export const getPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize;
};

export const getTotalUsesCount = (state: AppRootStateType) => {
    return state.usersPage.totalUsesCount;
};
export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state: AppRootStateType) => {
    return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress;
};