import React from 'react';
import s from './Users.module.css';
import {UserType} from '../../Redux/users-reducer';

type PropsType={
    totalUsesCount:number
    pageSize:number
    onSetCurrentPage:(page: number)=>void
    currentPage:number
    unfollow:(userId: number) => void
    follow: (userId: number) => void
    users: UserType[]
    isFetching:boolean
}

export const UsersFoo :React.FC<PropsType> = (props) => {
    let pageCount = Math.ceil(props.totalUsesCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    pages = pages.slice(0, 10);
    return (
        < div className={s.usersWrapper}>
            < div>
                {pages.map(el =>  {

                    return  <span key={el} onClick={() => props.onSetCurrentPage(el)}
                          className={props.currentPage === el ? s.selectedPage : ''}>{el}  </span>;
                })}
            </div>


            {
                props.users.map(el => <div className={''} key={el.id}>
                    <div>
                        <div><img width={'50px'}
                                  src={el.photos.small !== null ? el.photos.small : `${process.env.PUBLIC_URL}/img/user5.png`}
                                  alt={el.name} className={''}/></div>
                        <div>
                            {el.followed ? <button onClick={() => props.follow(el.id)}>Follow</button> :
                                <button onClick={() => props.unfollow(el.id)}>Unfollow</button>}

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
        </div>
    );
};
