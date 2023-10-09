import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    like:number
    photo:string
}

export const Post:React.FC<PropsType>=(props)=> {
    return (
        <div className={s.item}><img src={props.photo?props.photo:`${process.env.PUBLIC_URL}/img/user5.png`}/>{props.message}
            <div><span>like: {props.like}</span></div>
        </div>

    );
}
