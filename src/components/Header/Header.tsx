import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = { logOutTC:()=>void, isAuth: boolean, login: string | null, id: string, setUserProfileTC : (id:string)=>void}
export const Header: React.FC<PropsType> = (props) => {
    const onclickHandler=()=>{
        props.setUserProfileTC(props.id)
    }
    return (
        <header className={s.header}>
            <NavLink to={'/Profile/' + props.id} onClick={onclickHandler}><img src={`${process.env.PUBLIC_URL}/img/logo.png`}/></NavLink>

            {props.isAuth ? <div className={s.loginBlock} onClick={onclickHandler}>
                    <NavLink to={'/Profile/' + props.id}>{props.login}</NavLink>
                <button onClick={()=>props.logOutTC()}>LogOut</button>
                </div>
                : <div className={s.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>}
        </header>

    );
};
