import React from 'react';
import s from "./ProfileInfo.module.css"

export const ProfileInfo: React.FC=()=>{
    return <>
        <div><img src={"img/fon.jpg"}/></div>
        <div className={s.descriptionBlock}><img src={'img/user5.png'} width={'200px'}/> avatar + description</div>
    </>;

}