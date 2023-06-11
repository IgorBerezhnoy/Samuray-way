import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    src: string
    like:number
}

export function Post(props: PropsType) {
    return (
        <div className={s.item}><img src={props.src}/>{props.message}
            <div><span>like: {props.like}</span></div>
        </div>

    );
}
