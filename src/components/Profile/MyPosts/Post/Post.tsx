import React from 'react';
import s from './Post.module.css';

type PropsType = {
  postText: string
  likeCount: number
  photo: string,
  userName?: string
  timeAgo: string
}

export const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={s.item}>
      <div className={s.photoAndNameBlock}>
        <div><img className={s.userPhoto} src={props.photo ? props.photo : `${process.env.PUBLIC_URL}/img/user5.png`}/>
        </div>
        <div className={s.NameAndTimeBlock}>
          <div className={s.userName}>{props.userName}</div>
          <div className={s.timeAgo}>{props.timeAgo}</div>
        </div>
      </div>
      <div className={s.postText}>{props.postText}</div>
      <div className={s.postFooter}>
        <div className={s.likeImgAndCount}>
          <img className={s.likeImg} src={`${process.env.PUBLIC_URL}/img/icons/like2.png`} height={'35'}
               width={'40px'}/>
          <span className={s.likeCount}>{props.likeCount}</span>
        </div>
        <div><span className={s.commentCount}>0 Comment</span></div>
      </div>
    </div>

  );
};
