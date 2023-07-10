import React from 'react';
import s from './Header.module.css'
export const Header:React.FC=()=> {
    return (
        <header className={s.header}>
            <img src={"img/logo.png"}/>
        </header>

    );
}
