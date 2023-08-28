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


    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                props.setUsers(response.data.items);
            });

        }
    };

    const onClickFollowHandler = (user: UserType) => {
        debugger
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(user.id);
                }
            });
    };
    const onClickUnfollowHandler = (user: UserType) => {
        debugger
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.unfollow(user.id);
                }
            });
    };


    const testFunc = () => {
        alert(1)
    }
    return (
        <div className={s.usersWrapper}>
            <button onClick={getUsers}> Get users</button>
            {props.users.map(el => <div className={s.users} key={el.id}>
                <div>
                    <div><img width={'50px'}
                              src={el.photos.small !== null ? el.photos.small : `${process.env.PUBLIC_URL}/img/user5.png`}
                              alt={el.name} className={s.photo}/></div>
                    <div>
                        {el.followed ? <button onClick={testFunc}>Follow</button> :
                            <button onClick={testFunc}>Unfollow</button>}

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
