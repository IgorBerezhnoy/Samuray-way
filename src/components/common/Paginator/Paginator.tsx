import React, {useState} from 'react';
import s from './Paginator.module.css';

type PropsType = {
  totalUsesCount: number
  pageSize: number
  onSetCurrentPage: (page: number) => void
  currentPage: number
  portionSize?: number
}

export const Paginator: React.FC<PropsType> = ({children, portionSize = 5, ...props}) => {

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
        return <li className={props.currentPage === el ? s.active : ''}><span key={el}
                                                                              onClick={() => props.onSetCurrentPage(el)}
                                                                              className={props.currentPage === el ? s.active : ''}>{el}  </span>
        </li>;
      })}
  </>;
  const onClickPrevHandler = () => {
    if (portionNumber > 1) {
      setPortionNumber((portionNumber - 1));
    }
  };

  const usersWithButtons = <div className={s.container}>
    <ul className={s.pagination}>
      <li><span className={portionNumber <= 1?s.disabled :""} onClick={onClickPrevHandler}>PREV</span></li>
      <div>{users}</div>
      <li><span onClick={() => {
        setPortionNumber((portionNumber + 1));
      }}>NEXT
      </span></li>
    </ul>
  </div>;

  return (
    < div className={s.usersWrapper}>
      {usersWithButtons}
      {children}
      <div className={s.bottomPag}>{usersWithButtons}</div>

    </div>
  );
};

// <div className={s.container}>
//   <ul className={s.pagination}>
//     <li>
//       <a href="#">Prev</a>
//     </li>
//     <li>
//       <a href="#">1</a>
//     </li>
//     <li className={s.active}>
//       <a href="#">2</a>
//     </li>
//     <li>
//       <a href="#">3</a>
//     </li>
//     <li>
//       <a href="#">4</a>
//     </li>
//     <li>
//       <a href="#">5</a>
//     </li>
//     <li>
//       <a href="#">Next</a>
//     </li>
//   </ul>
// </div>

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
