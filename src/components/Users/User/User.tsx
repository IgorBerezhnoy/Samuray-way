import React from 'react';
import {UserType} from '../../../Redux/users-reducer';
import {NavLink} from 'react-router-dom';

type PropsUserType = {
    user: UserType
    followingInProgress: number[],
    followUnfollowTC: (user: UserType, followed: boolean) => void
}
export const User: React.FC<PropsUserType> = ({user, ...props}) => {


    return <div className={''} key={user.id}>
        <div>
            <div><NavLink to={`/Profile/${user.id}`}>
                <img width={'50px'}
                     src={user.photos.small !== null ? user.photos.small : `${process.env.PUBLIC_URL}/img/user5.png`}
                     alt={user.name} className={''}/></NavLink></div>
            <div>
                <button disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => props.followUnfollowTC(user, !user.followed)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
        </div>
        <div>
                            <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            </span>
            <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                            </span>
        </div>
    </div>;
};