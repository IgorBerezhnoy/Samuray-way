import React from 'react';
import s from "./ProfileInfo.module.css"

export const ProfileInfo=()=>{
    return <>
        <div><img src={'https://img5.goodfon.ru/original/800x480/0/67/kanada-ozero-bow-lake-1.jpg'}/></div>
        <div className={s.descriptionBlock}><img src={'https://wa-groups.ru/img/user5.png'} width={'200px'}/> avatar + description</div>
    </>;

}