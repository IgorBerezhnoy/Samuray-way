import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
export function Profile() {
    return (
        <div className={s.content} >
            <div><img src={'https://img5.goodfon.ru/original/800x480/0/67/kanada-ozero-bow-lake-1.jpg'}/></div>
            <div><img src={'https://wa-groups.ru/img/user5.png'} width={'200px'}/> avatar + description</div>
           <MyPosts/>
        </div>
    );
}
