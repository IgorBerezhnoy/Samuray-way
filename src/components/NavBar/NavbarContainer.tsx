import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsType} from '../../Redux/Store';
import {StoreContext} from '../../StoreContext';
import {Navbar} from './Navbar';

// type PropsType = {
//     state: { navItems: string[] }
//     friends: DialogsType
// }

export const NavbarContainer: React.FC = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let itemsNavbar = store.getState().navbar.navItems.map((el, i) => el === 'Messages' ?
                    <div key={i}><NavLink to={'/Dialogs'} activeClassName={s.active}>Messages</NavLink></div> :
                    <div key={i}><NavLink to={`/${el}`}
                                          activeClassName={s.active}>{el}</NavLink>
                    </div>);
                let friendsNavbar = store.getState().dialogsPage.dialogs.map((el, i) => <div><NavLink
                    to={`/dialogs/${el.id}`}><img
                    className={s.imgFriends} src={el.srs}/>{el.name}</NavLink></div>).slice(0, 3);
                return (<Navbar friendsNavbar={friendsNavbar} itemsNavbar={itemsNavbar}/>
                );
            }
        }
        </ StoreContext.Consumer>);
};
