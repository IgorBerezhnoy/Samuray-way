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
import {UsersC} from './UsersC';



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
export default connect (mapStateToProps,mapDispatchToProps) (UsersC)