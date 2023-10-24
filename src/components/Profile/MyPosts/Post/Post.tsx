import React from 'react';
import s from './Post.module.css';
import {PostType} from '../../../../Redux/profile-reducer';

type PropsType = {
  post: PostType
  photo: string,
  userName?: string
  addOrRemoveLike: (postId: number) => void
}

export const Post: React.FC<PropsType> = (props) => {

  const onClickLikeHandler = () => props.addOrRemoveLike(props.post.id);
  return (
    <div className={s.item}>
      <div className={s.photoAndNameBlock}>
        <div><img className={s.userPhoto} src={props.photo ? props.photo : `${process.env.PUBLIC_URL}/img/user5.png`}/>
        </div>
        <div className={s.NameAndTimeBlock}>
          <div className={s.userName}>{props.userName}</div>
          <div className={s.timeAgo}>{props.post.timeAgo}</div>
        </div>
      </div>
      <div className={s.postText}>{props.post.postText}</div>
      <div className={s.postFooter}>
        <div className={s.likeImgAndCount}>
          <img className={`${s.likeImg} ${props.post.isLiked && s.likedImh}`}
               src={`${process.env.PUBLIC_URL}/img/icons/like2.png`}
               onClick={onClickLikeHandler}/>
          <span className={s.likeCount}>{props.post.like}</span>
        </div>
        <div><span className={s.commentCount}>0 Comment</span></div>
      </div>
    </div>
  );
};
