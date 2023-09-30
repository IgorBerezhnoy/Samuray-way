import React from 'react';
import {UserType} from '../../Redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {Paginator} from '../common/Paginator/Paginator';

type PropsType = {
    totalUsesCount: number
    pageSize: number
    onSetCurrentPage: (page: number) => void
    currentPage: number
    followUnfollowTC: (user: UserType, followed: boolean) => void
    users: UserType[]
    isFetching: boolean
    followingInProgress: number[]
    followingInProgressAC: (userId: number, isFetching: boolean) => void
}

export const Users: React.FC<PropsType> = (props) => {

    const onClickFollowHandler = (user: UserType) => {
        props.followUnfollowTC(user, true);
    };
    const onClickUnfollowHandler = (user: UserType) => {
        props.followUnfollowTC(user, false);
    };

    return (
        <Paginator onSetCurrentPage={props.onSetCurrentPage} currentPage={props.currentPage} pageSize={props.pageSize}
                   totalUsesCount={props.totalUsesCount}>
            {
                props.users.map(el => <div className={''} key={el.id}>
                    <div>
                        <div><NavLink to={`/Profile/${el.id}`}>
                            <img width={'50px'}
                                 src={el.photos.small !== null ? el.photos.small : `${process.env.PUBLIC_URL}/img/user5.png`}
                                 alt={el.name} className={''}/></NavLink></div>
                        <div>
                            {el.followed ? <button disabled={props.followingInProgress.some(id => id === el.id)}
                                                   onClick={() => onClickUnfollowHandler(el)}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === el.id)}
                                        onClick={() => onClickFollowHandler(el)}>Follow</button>}

                        </div>
                    </div>
                    <div>
                            <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                            </span>
                        <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                            </span>
                    </div>
                </div>)
            }
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
