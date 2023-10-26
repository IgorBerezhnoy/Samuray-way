import {Navbar} from './Navbar';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../Redux/redux-store';
import {setIDInNavbar} from '../../Redux/navbar-reducer';
import {setUserProfileTC} from '../../Redux/profile-reducer';


let mapStateToProps = (state:AppRootStateType ) => {
    return {
        navbar: state.navbar,
        dialogs: state.dialogsPage.dialogs,
        id: state.authMe.id
    };
};
let mapDispatchToProps = () => {
    return {
        setIDInNavbar,setUserProfileTC
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
