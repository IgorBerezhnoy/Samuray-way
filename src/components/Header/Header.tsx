import React from 'react';
import s from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={s.header}>
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`}/>
        </header>

    );
};
