import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../Redux/redux-store';
import {
    followingInProgressAC,
    followTC,
    getUsersTC,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollowTC,
    UserType
} from '../../Redux/users-reducer';
import {UsersFoo} from './UsersFoo';
import Preloader from '../common/Preloader/Preloader';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsesCount,
    getUsers, getUsersSuperSelector
} from '../../Redux/users-selectors';


type UsersCProps = {
    users: UserType[]
    unfollowTC: (user: UserType) => void
    followTC: (user: UserType) => void
    setUsers: (users: UserType[]) => void,
    pageSize: number,
    totalUsesCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void,
    followingInProgress: number[]
    followingInProgressAC: (userId: number, isFetching: boolean) => void,
    getUsersTC: (currentPage: number, pageSize: number) => void
}

class UsersAPI extends React.Component<UsersCProps> {


    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onSetCurrentPage(page: number) {

        this.props.setCurrentPage(page);
        this.props.getUsersTC(page, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> :
                <UsersFoo users={this.props.users}
                          currentPage={this.props.currentPage}
                          onSetCurrentPage={this.onSetCurrentPage.bind(this)}
                          followTC={this.props.followTC}
                          unfollowTC={this.props.unfollowTC}
                          pageSize={this.props.pageSize}
                          totalUsesCount={this.props.totalUsesCount}
                          isFetching={this.props.isFetching}
                          followingInProgress={this.props.followingInProgress}
                          followingInProgressAC={this.props.followingInProgressAC}
                />
            }
        </>
            ;
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: getUsers(state),
        superUsers: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsesCount: getTotalUsesCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };

};
// let mapStateToProps = (state: AppRootStateType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsesCount: state.usersPage.totalUsesCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     };
//
// };


export default compose<React.ComponentType>(connect(mapStateToProps,
    {
        setUsers,
        setCurrentPage,
        setTotalCount,
        toggleIsFetching,
        followingInProgressAC,
        getUsersTC,
        unfollowTC,
        followTC

    }), withRouter, WithAuthRedirect)(UsersAPI);


// this.props.toggleIsFetching(true);
// console.log(this.props);
// usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
//     .then(response => {
//         this.props.toggleIsFetching(false);
//         this.props.setUsers(response.items);
//         this.props.setTotalCount(response.totalCount);
//     });


// let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
//     return {
//         follow:followAC,
//         unfollow:unfollowAC,
//         setUsers:setUsersAC,
//         setCurrentPage: setCurrentPageAC,
//         setTotalCount:setTotalCountAC,
//         toggleIsFetching:toggleIsFetchingAC };
// };

// this.props.toggleIsFetching(true);
//
// usersAPI.getUsers(page, this.props.pageSize)
//     .then(response => {
//         this.props.toggleIsFetching(false);
//         this.props.setUsers(response.items);
//     });
