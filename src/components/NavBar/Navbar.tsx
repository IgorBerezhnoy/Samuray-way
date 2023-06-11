import React from 'react';
import s from './Navbar.module.css';

export function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}><a href={''}>Profile</a></div>
            <div><a href={''}>Messages</a></div>
            <div><a href={''}>News</a></div>
            <div><a href={''}>Settings</a></div>
        </nav>

    );
}
