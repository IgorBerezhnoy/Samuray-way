import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {DialogsType, MessagesType} from '../../Redux/diologs-reducer';

type PropsType = {
  navbar: { navItems: { name: string, navLink: string, src: string }[] }
  dialogsPage: { dialogs: DialogsType, messages: MessagesType }
  id: number | null
  setIDInNavbar: (id: number) => void
  setUserProfileTC: (id: string) => void
}

export const Navbar: React.FC<PropsType> = (props) => {

  const onclickHandler = () => {
    if (props.id) {
      props.setUserProfileTC(props.id.toString());
    }

  };
  console.log(props.id);
  let itemsNavbar = props.navbar.navItems.map((el, i) => el.name === 'Profile' ?
      <NavLink to={el.navLink + props.id} onClick={onclickHandler} activeClassName={s.active}>
    <div key={i} className={s.item}>
      <img className={s.itemIcons} src={el.src} alt={el.name}/>
      <span className={s.itemText}>{el.name}</span>
    </div>
    </NavLink>
    :
      <NavLink to={el.navLink} activeClassName={s.active}>
    <div key={i} className={s.item}>
      <img src={el.src} alt={el.name} className={s.itemIcons}/>
      <span className={s.itemText}>{el.name}</span>
    </div>
    </NavLink>
);

  let friendsNavbar = props.dialogsPage.dialogs.map((el, i) => <div key={i}><NavLink
    to={`/dialogs/${el.id}`}>
    <img className={s.imgFriends} src={el.srs} alt={el.name}/>{el.name}</NavLink></div>).slice(0, 3);


  return (
    <nav className={s.nav}>
      <div className={s.items}>
        {itemsNavbar}
        <div className={s.friendsBlock}>
          <div className={s.headerFriends}>Friends</div>
          <div className={s.imagesFriends}>
            {friendsNavbar}

          </div>
        </div>
      </div>
    </nav>);
};

// let itemsNavbar = props.navbar.navItems.map((el, i) => el === 'Messages' ?
//     <div key={i}>
//         <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
//     </div>
//     : el === 'Profile' ? <NavLink to={'/Profile/' + props.id}>{el}</NavLink>
//         : <div key={i}>
//             <NavLink to={`/${el}`} activeClassName={s.active}>{el}</NavLink>
//         </div>);

// {/*<div><NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink></div>*/
// }
// {/*<div><NavLink to={'/Dialogs'} activeClassName={s.active}>Messages</NavLink></div>*/
// }
// {/*<div><NavLink to={'/News'} activeClassName={s.active}> News</NavLink></div>*/
// }
// {/*<div><NavLink to={'/Music'} activeClassName={s.active}>Music</NavLink></div>*/
// }
// {/*<div><NavLink to={'/Settings'} activeClassName={s.active}>Settings</NavLink></div>*/
// }
// {/*<div><NavLink to={'/dialogs/1'}><img  className={s.imgFriends} src={'img/user5.png'}/> Dimych</NavLink></div>*/
// }
// {/*<div ><NavLink to={'/dialogs/2'}><img className={s.imgFriends} src={'img/user7.png'}/>Andrew</NavLink>*/
// }
// {/*</div>*/
// }
// {/*<div ><NavLink to={'/dialogs/3'}><img className={s.imgFriends}*/
// }
// {/*    src={'img/1761894.png'}/> Sveta </NavLink></div>*/
// }
