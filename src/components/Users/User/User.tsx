import React from 'react';
import {UserType} from '../../../Redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {Button} from '../../common/Button/Button';
import s from './User.module.css';

type PropsUserType = {
  user: UserType
  followingInProgress: number[],
  followUnfollowTC: (user: UserType, followed: boolean) => void
}
export const User: React.FC<PropsUserType> = ({user, ...props}) => {


  return <div className={s.user} key={user.id}>
    <div className={s.wrapper}>
      <img className={s.bg} src={`${process.env.PUBLIC_URL}/img/user/bg/card1.png`} alt={''}/>
      <div className={s.img_text}>
        <NavLink to={`/Profile/${user.id}`}>
          <img
               src={user.photos.small !== null ? user.photos.small : `${process.env.PUBLIC_URL}/img/user5.png`}
               alt={user.name} className={s.img}/>
          <div className={s.name}></div>
          <div className={s.nikName}></div>
        </NavLink>
        <div>
          <Button disabled={props.followingInProgress.some(id => id === user.id)}
                  callBack={() => props.followUnfollowTC(user, !user.followed)}
                  name={user.followed ? 'Unfollow' : 'Follow'}/>
        </div>
      </div>
    </div>

  </div>;
};