import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserType
} from '../../Redux/users-reducer';
import axios from 'axios';
import {UsersFoo} from './UsersFoo';
import Preloader from '../common/Preloader/Preloader';


type UsersCProps = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void,
    pageSize: number,
    totalUsesCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersAPI extends React.Component<UsersCProps> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        console.log(this.props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onSetCurrentPage(page: number) {

        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> :
                <UsersFoo users={this.props.users} currentPage={this.props.currentPage}
                          onSetCurrentPage={this.onSetCurrentPage.bind(this)} follow={this.props.follow}
                          unfollow={this.props.unfollow} pageSize={this.props.pageSize}
                          totalUsesCount={this.props.totalUsesCount} isFetching={this.props.isFetching}/>}</>
            ;
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsesCount: state.usersPage.totalUsesCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };

};


// let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
//     return {
//         follow:followAC,
//         unfollow:unfollowAC,
//         setUsers:setUsersAC,
//         setCurrentPage: setCurrentPageAC,
//         setTotalCount:setTotalCountAC,
//         toggleIsFetching:toggleIsFetchingAC };
// };
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching

})(UsersAPI);