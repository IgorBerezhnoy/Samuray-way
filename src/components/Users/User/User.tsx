import React from 'react';
import {UserType} from '../../../Redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {Button} from '../../common/Button/Button';
import s from './User.module.css';
import {imgWrap} from '../../../utils/imgWrap';

type PropsUserType = {
  user: UserType
  followingInProgress: number[],
  followUnfollowTC: (user: UserType, followed: boolean) => void
  numBackground:number
}
export const User: React.FC<PropsUserType> = ({user, ...props}) => {


  return <div className={s.user} key={user.id}>
    <div className={s.wrapper}>
      <img className={s.bg} src={imgWrap('/img/user/bg/card'+props.numBackground+'.png')} alt={'user background'}/>
      <div className={s.img_text}>
        <NavLink to={`/Profile/${user.id}`}>
          <img src={user.photos.small !== null ? user.photos.small : imgWrap('/img/user5.png')}
               alt={'Photo of' + user.name} className={s.img}/>
          <h2 className={s.fullName}>{user.name}</h2>
        </NavLink>
        <div className={s.nickname}>{'@' + user.name}</div>
        <div>
          <div className={s.btn}><Button disabled={props.followingInProgress.some(id => id === user.id)}
                                         callBack={() => props.followUnfollowTC(user, !user.followed)}
                                         name={user.followed ? 'Unfollow' : 'Follow'} size={'large'} color={'green'}/>
          </div>
        </div>
      </div>
    </div>

  </div>;
};