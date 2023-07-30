import React from 'react';
import {UserType} from '../../Redux/users-reducer';
import s from './Users.module.css';


type PropSType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: PropSType) => {
if (props.users.length===0) {
    props.setUsers([{
        id: 1,
        src: `${process.env.PUBLIC_URL}/img/user5.png`,
        followed: true,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: {city: 'Minsk', country: 'Belarus',}
    },
        {
            id: 2,
            src: `${process.env.PUBLIC_URL}/img/Sveta.png`,
            followed: true,
            fullName: 'Sasha',
            status: 'I like a football',
            location: {city: 'Moscow', country: 'Russia',}
        },
        {
            id: 3,
            src: `${process.env.PUBLIC_URL}/img/user7.png`,
            followed: false,
            fullName: 'Andrew',
            status: 'I am a boss too',
            location: {city: 'Kiev', country: 'Ukraine',}
        }])
}
    return (
        <div className={s.usersWrapper}>
            {props.users.map(el => <div className={s.users} key={el.id}>
                <div>
                    <div><img width={'50px'} src={el.src} alt={el.fullName} className={s.photo}/></div>
                    <div>
                        {el.followed ? <button onClick={() => props.follow(el.id)}>Follow</button> :
                            <button onClick={() => props.unfollow(el.id)}>Unfollow</button>}

                            </div>
                            </div>
                            <div >
                            <span>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                            </span>
                            <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                            </span>
                            </div>
                            </div>)}
                            </div>
                            );
                        };
