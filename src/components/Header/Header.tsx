import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {StateType} from '../../Redux/auth-reducer';

type PropsType = { isAuth: boolean, login: string | null, id: string, setUserDateAC: (state: StateType) => void , setUserProfileTC : (id:string)=>void}
export const Header: React.FC<PropsType> = (props) => {
    const onclickHandler=()=>{
        props.setUserProfileTC(props.id)
    }
    return (
        <header className={s.header}>
            <NavLink to={'/Profile/' + props.id} onClick={onclickHandler}><img src={`${process.env.PUBLIC_URL}/img/logo.png`}/></NavLink>

            {props.isAuth ? <div className={s.loginBlock} onClick={onclickHandler}>
                    <NavLink to={'/Profile/' + props.id}>{props.login}</NavLink>
                </div>
                : <div className={s.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>}
        </header>

    );
};
