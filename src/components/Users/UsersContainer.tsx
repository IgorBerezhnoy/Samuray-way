import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../Redux/redux-store';
import {
    followingInProgressAC,
    followUnfollowTC,
    getUsersTC,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    UserType
} from '../../Redux/users-reducer';
import {Users} from './Users';
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
    getUsers,
    getUsersSuperSelector
} from '../../Redux/users-selectors';



class UsersAPI extends React.Component<UsersAPIType> {
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
                <Users users={this.props.users}
                       currentPage={this.props.currentPage}
                       onSetCurrentPage={this.onSetCurrentPage.bind(this)}
                       followUnfollowTC={this.props.followUnfollowTC}
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

export default compose<React.ComponentType>(connect(mapStateToProps,
    {
        setUsers,
        setCurrentPage,
        setTotalCount,
        toggleIsFetching,
        followingInProgressAC,
        getUsersTC,
        followUnfollowTC,
    }), withRouter, WithAuthRedirect)(UsersAPI);

type UsersAPIType = mapStateToPropsType&mapDispatchToPropsType

type mapStateToPropsType=ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType={
    followUnfollowTC: (user: UserType, followed: boolean) => void
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void,
    getUsersTC: (currentPage: number, pageSize: number) => void
    followingInProgressAC: (userId: number, isFetching: boolean) => void,

}

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
