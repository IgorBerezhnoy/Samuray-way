import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {RootStateType} from '../../Redux/redux-store';
import {ActionType, followAC, setUsersAC, SetUsersAT, unfollowAC, UserType} from '../../Redux/users-reducer';



let mapStateToProps=(state:RootStateType)=>{
    return{
        users:state.usersPage.users
    }

}



let mapDispatchToProps=(dispatch:(action: ActionType) => void)=>{
    return{
        follow:(userId:number)=>{
            dispatch((followAC(userId)))
        },
        unfollow:(userId:number)=>{
            dispatch((unfollowAC(userId)))
        },
        setUsers:(users:UserType[])=>{
            dispatch((setUsersAC(users)))
        }

    }
}
export default connect (mapStateToProps,mapDispatchToProps) (Users)