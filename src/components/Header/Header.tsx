import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';

type PropsType = HeaderContainerPropsType
export const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`}/>

            {props.isAuth ? <div className={s.loginBlock}>
                    <NavLink to={'/profile/'+props.id}>{props.login}</NavLink>
                </div>
                : <div className={s.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>}
        </header>

    );
};
