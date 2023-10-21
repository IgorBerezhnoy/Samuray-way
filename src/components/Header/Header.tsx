import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {Button} from '../common/Button/Button';

type PropsType = { logOutTC:()=>void, isAuth: boolean, login: string | null, id: string, setUserProfileTC : (id:string)=>void}
export const Header: React.FC<PropsType> = (props) => {
    const onclickHandler=()=>{
        props.setUserProfileTC(props.id)
    }
    return (
        <header className={s.header}>
            <NavLink to={'/profile/' + props.id} onClick={onclickHandler}><img alt={"logo"} src={`${process.env.PUBLIC_URL}/img/logo.png`}/></NavLink>

            {props.isAuth ? <div className={s.loginBlock} onClick={onclickHandler}>
                    <NavLink to={'/profile/' + props.id}>{props.login}</NavLink>
                {/*<button className={s.headerBtn} onClick={()=>props.logOutTC()}>LogOut</button>*/}
                <Button callBack={()=>props.logOutTC()} name={"LogOut"} size={"medium"} color={"white"} />
                </div>
                : <div className={s.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>}
        </header>
    );
};
