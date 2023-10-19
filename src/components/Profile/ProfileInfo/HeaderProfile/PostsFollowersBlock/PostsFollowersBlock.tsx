import React from 'react';
import s from './PostsFollowersBlock.module.css';

type PropsType = {
  posts: number
  followers: string
  follow: string
}
export const PostsFollowersBlock = (props: PropsType) => {


  return (
    <div className={s.wrapper}>
      <div className={s.item}><span className={s.number} >{props.posts }</span> <span className={s.littleText}>Posts</span></div>
      <div className={s.item}><span className={s.number}>{props.followers }</span> <span className={s.littleText}>Followers</span></div>
      <div className={s.item}><span className={s.number}>{props.follow }</span> <span className={s.littleText}>Follow</span></div>
    </div>
  );
};

