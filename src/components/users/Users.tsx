import React from 'react';
import {UserType} from '../../Redux/users-reducer';
import s from './Users.module.css';
import axios from 'axios';


type PropSType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: PropSType) => {


    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            props.setUsers(response.data.items);
        });


    }
    return (
        <div className={s.usersWrapper}>
            {props.users.map(el => <div className={s.users} key={el.id}>
                <div>
                    <div><img width={'50px'}
                              src={el.photos.small !== null ? el.photos.small : `${process.env.PUBLIC_URL}/img/user5.png`}
                              alt={el.name} className={s.photo}/></div>
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
            </div>)}
        </div>
    );
};
