import React, {useState} from 'react';
import s from './Paginator.module.css';

type PropsType = {
    totalUsesCount: number
    pageSize: number
    onSetCurrentPage: (page: number) => void
    currentPage: number
    portionSize?: number
}

export const Paginator: React.FC<PropsType> = ({children, portionSize = 10, ...props}) => {

    let pageCount = Math.ceil(props.totalUsesCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    let [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    // pages = pages.slice(0, 10);
    const users = <>{
        pages
            .filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
            .map(el => {
                return <span key={el} onClick={() => props.onSetCurrentPage(el)}
                             className={props.currentPage === el ? s.selectedPage : ''}>{el}  </span>;
            })}
    </>;
    const onClickPrevHandler = () => {
        if (portionNumber > 1) {
            setPortionNumber((portionNumber - 1));
        }
    };

    const usersWithButtons = <div>
        <button onClick={onClickPrevHandler} disabled={portionNumber <= 1}>PREV</button>
        <div>{users}</div>
        <button onClick={() => {
            setPortionNumber((portionNumber + 1));
        }}>NEXT
        </button>
    </div>;

    return (
        < div className={s.usersWrapper}>
            {usersWithButtons}
            {children}
            {usersWithButtons}

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
