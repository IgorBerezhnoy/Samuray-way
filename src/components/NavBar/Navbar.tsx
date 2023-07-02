import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export const Navbar:React.FC =()=> {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <div><NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink></div>
                <div><NavLink to={'/Dialogs'} activeClassName={s.active}>Messages</NavLink></div>
                <div><NavLink to={'/News'} activeClassName={s.active}> News</NavLink></div>
                <div><NavLink to={'/Music'} activeClassName={s.active}>Music</NavLink></div>
                <div><NavLink to={'/Settings'} activeClassName={s.active}>Settings</NavLink></div>
            </div>
        </nav>

    );
}
