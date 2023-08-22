import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../Redux/redux-store';
import {
    ActionType,
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../Redux/users-reducer';
import axios from 'axios';
import {UsersFoo} from './UsersFoo';


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

}
 class UsersAPI extends React.Component<UsersCProps> {

    componentDidMount() {
        console.log(this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onSetCurrentPage(page: number) {
        debugger
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        return <UsersFoo users={this.props.users} currentPage={this.props.currentPage}
                         onSetCurrentPage={this.onSetCurrentPage.bind(this)} follow={this.props.follow}
                         unfollow={this.props.unfollow} pageSize={this.props.pageSize} totalUsesCount={this.props.totalUsesCount}/>
            ;
    }
}

let mapStateToProps=(state:RootStateType)=>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsesCount:state.usersPage.totalUsesCount,
        currentPage:state.usersPage.currentPage
    }

}



let mapDispatchToProps=(dispatch:(action: ActionType) => void)=>{
    return{
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId:number)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:UserType[])=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(page:number)=>{
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount:(cont:number)=>{
            dispatch(setTotalCountAC(cont))
        }

    }
}
export default connect (mapStateToProps,mapDispatchToProps) (UsersAPI)