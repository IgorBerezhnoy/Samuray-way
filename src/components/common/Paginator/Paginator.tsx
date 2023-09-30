import React from 'react';
import s from './Paginator.module.css';

type PropsType = {
    totalUsesCount: number
    pageSize: number
    onSetCurrentPage: (page: number) => void
    currentPage: number
}

export const Paginator: React.FC<PropsType> = ({children,...props}) => {
    let pageCount = Math.ceil(props.totalUsesCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }


    pages = pages.slice(0, 10);
    const users = <>{pages.map(el => {
        return <span key={el} onClick={() => props.onSetCurrentPage(el)}
                     className={props.currentPage === el ? s.selectedPage : ''}>{el}  </span>;
    })}</>;
    return (
        < div className={s.usersWrapper}>
            <div>{users}</div>
            {children}
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
