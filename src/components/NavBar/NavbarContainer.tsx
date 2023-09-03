import React from 'react';

import {Navbar} from './Navbar';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../Redux/redux-store';

// type PropsType = {
//     state: { navItems: string[] }
//     friends: DialogsType
// }

let mapStateToProps = (state:AppRootStateType ) => {
    return {
        navbar: state.navbar,
        dialogsPage: state.dialogsPage
    };
};
let mapDispatchToProps = (dispatch:any) => {
    return {

    };
};

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

//
// export const NavbarContainer: React.FC = (props) => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let itemsNavbar = store.getState().navbar.navItems.map((el, i) => el === 'Messages' ?
//                     <div key={i}><NavLink to={'/Dialogs'} activeClassName={s.active}>Messages</NavLink></div> :
//                     <div key={i}><NavLink to={`/${el}`}
//                                           activeClassName={s.active}>{el}</NavLink>
//                     </div>);
//                 let friendsNavbar = store.getState().dialogsPage.dialogs.map((el, i) => <div><NavLink
//                     to={`/dialogs/${el.id}`}><img
//                     className={s.imgFriends} src={el.srs}/>{el.name}</NavLink></div>).slice(0, 3);
//                 return (<Navbar friendsNavbar={friendsNavbar} itemsNavbar={itemsNavbar}/>
//                 );
//             }
//         }
//         </ StoreContext.Consumer>);
// };
