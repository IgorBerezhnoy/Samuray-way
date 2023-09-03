import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';
import {StateType} from '../../Redux/auth-reducer';

type PropsType = { isAuth: boolean, login: string | null, id: number | null, setUserDateAC: (state: StateType) => void }
export const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <NavLink to={'/profile'}><img src={`${process.env.PUBLIC_URL}/img/logo.png`}/></NavLink>

            {props.isAuth ? <div className={s.loginBlock}>
                    <NavLink to={'/profile/' + props.id}>{props.login}</NavLink>
                </div>
                : <div className={s.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>}
        </header>

    );
};
