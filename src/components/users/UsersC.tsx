import React from 'react';
import axios from 'axios';
import s from './Users.module.css';
import {UserType} from '../../Redux/users-reducer';

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

export class UsersC extends React.Component<UsersCProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }
    onSetCurrentPage(page:number) {
       this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsesCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        pages=pages.slice(0,10)
        return < div className={s.usersWrapper}>
            < div>
                {pages.map(el => <span key={el} onClick={()=>this.onSetCurrentPage(el)}
                                       className={this.props.currentPage === el ? s.selectedPage : ''}>{el}  </span>)}
            </div>


            {
                this.props.users.map(el => <div className={''} key={el.id}>
                    <div>
                        <div><img width={'50px'}
                                  src={el.photos.small !== null ? el.photos.small : `${process.env.PUBLIC_URL}/img/user5.png`}
                                  alt={el.name} className={''}/></div>
                        <div>
                            {el.followed ? <button onClick={() => this.props.follow(el.id)}>Follow</button> :
                                <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>}

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
            ;
    }
}

{/*<span className={s.selectedPage}>2</span>;*/
}
{/*<span className={s.selectedPage}>3</span>;*/
}
{/*<span className={s.selectedPage}>4</span>;*/
}
{/*<span className={s.selectedPage}>5</span>;*/
}