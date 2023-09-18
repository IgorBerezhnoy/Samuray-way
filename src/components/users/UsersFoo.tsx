import React from 'react';
import s from './Users.module.css';
import {UserType} from '../../Redux/users-reducer';
import {NavLink} from 'react-router-dom';

type PropsType = {
    totalUsesCount: number
    pageSize: number
    onSetCurrentPage: (page: number) => void
    currentPage: number
    unfollowTC: (user: UserType) => void
    followTC: (user: UserType) => void
    users: UserType[]
    isFetching: boolean
    followingInProgress: number[]
    followingInProgressAC: (userId: number, isFetching: boolean) => void
}

export const UsersFoo: React.FC<PropsType> = (props) => {
    let pageCount = Math.ceil(props.totalUsesCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    const onClickFollowHandler = (user: UserType) => {
        props.followTC(user);
    };
    const onClickUnfollowHandler = (user: UserType) => {
        props.unfollowTC(user);
    };

    pages = pages.slice(0, 10);
    const users = <>{pages.map(el => {

        return <span key={el} onClick={() => props.onSetCurrentPage(el)}
                     className={props.currentPage === el ? s.selectedPage : ''}>{el}  </span>;
    })}</>;
    return (

        < div className={s.usersWrapper}>
            < div>
                {users}
            </div>


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
            <div>{users}</div>
        </div>
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
