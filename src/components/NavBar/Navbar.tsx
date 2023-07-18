import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsType} from '../../Redux/Store';

type PropsType = {
    state: { navItems: string[] }
    friends: DialogsType
}

export const Navbar: React.FC<PropsType> = (props) => {

    let itemsNavbar = props.state.navItems.map((el, i) => el === 'Messages' ?
        <div key={i}><NavLink to={'/Dialogs'} activeClassName={s.active}>Messages</NavLink></div> :
        <div key={i}><NavLink to={`/${el}`}
                              activeClassName={s.active}>{el}</NavLink>
        </div>);
    let friendsNavbar = props.friends.map((el, i) => <div><NavLink to={`/dialogs/${el.id}`}><img
        className={s.imgFriends} src={el.srs}/>{el.name}</NavLink></div>).slice(0, 3);
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                {itemsNavbar}
                {/*<div><NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink></div>*/}
                {/*<div><NavLink to={'/Dialogs'} activeClassName={s.active}>Messages</NavLink></div>*/}
                {/*<div><NavLink to={'/News'} activeClassName={s.active}> News</NavLink></div>*/}
                {/*<div><NavLink to={'/Music'} activeClassName={s.active}>Music</NavLink></div>*/}
                {/*<div><NavLink to={'/Settings'} activeClassName={s.active}>Settings</NavLink></div>*/}
                <div className={s.friendsBlock}>
                    <div className={s.headerFriends}>Friends</div>
                    <div className={s.imagesFriends}>
                        {/*<div><NavLink to={'/dialogs/1'}><img  className={s.imgFriends} src={'img/user5.png'}/> Dimych</NavLink></div>*/}
                        {/*<div ><NavLink to={'/dialogs/2'}><img className={s.imgFriends} src={'img/user7.png'}/>Andrew</NavLink>*/}
                        {/*</div>*/}
                        {/*<div ><NavLink to={'/dialogs/3'}><img className={s.imgFriends}*/}
                        {/*    src={'img/1761894.png'}/> Sveta </NavLink></div>*/}
                        {friendsNavbar}

                    </div>
                </div>
            </div>
        </nav>

    );
};
