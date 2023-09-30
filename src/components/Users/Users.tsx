import React from 'react';
import {UserType} from '../../Redux/users-reducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User/User';

type PropsType = {
    totalUsesCount: number
    pageSize: number
    onSetCurrentPage: (page: number) => void
    currentPage: number
    followUnfollowTC: (user: UserType, followed: boolean) => void
    users: UserType[]
    isFetching: boolean
    followingInProgress: number[]
}

export const Users: React.FC<PropsType> = (props) => {

    const users = props.users.map(el =>
        <User key={el.id} user={el} followingInProgress={props.followingInProgress}followUnfollowTC={props.followUnfollowTC}/>);
    return (
        <Paginator onSetCurrentPage={props.onSetCurrentPage} currentPage={props.currentPage} pageSize={props.pageSize}
                   totalUsesCount={props.totalUsesCount}>
            {users}
        </Paginator>
    );
};

// props.followingInProgressAC(user.id, true);
// usersAPI.followUsersApi(user)
//     .then(response => {
//         if (response.data.resultCode === 0) {
//             props.follow(user.id);
//         }
//         props.followingInProgressAC(user.id, false);
//     });


//   props.followingInProgressAC(user.id, true);
//
//   usersAPI.unfollowUsersApi(user)
//       .then(response => {
//           if (response.data.resultCode === 0) {
//               props.unfollow(user.id);
//           }
//           props.followingInProgressAC(user.id, false);
//       });
