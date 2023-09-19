import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {NavbarContainer} from './components/NavBar/NavbarContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {LoginContainer} from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {connect} from 'react-redux';
import {AppRootStateType} from './Redux/redux-store';
import {compose} from 'redux';
import {setInitializedTC} from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';


//
// type PropsType = {
//     state: StateType
//     dispatch:(action:ActionType)=>void
// }

class App extends React.Component<AppPropsType> {
    componentDidMount() {
       this.props.setInitializedTC()
    }

    render() {
        if(!this.props.isInitialized){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                {/*<Navbar state={props.state.navbar} friends={props.state.dialogsPage.dialogs}/>*/}
                <NavbarContainer/>
                <div className={'appWrapper'}>

                    <Route path={'/dialogs'}
                        // render={() => <DialogsContainer  state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'}
                        // render={() => <Profile state={props.state.profilePage}  dispatch={props.dispatch}/>}/>
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/users'}
                        // render={() => <Profile state={props.state.profilePage}  dispatch={props.dispatch}/>}/>
                           render={() => <UsersContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <LoginContainer/>}/>
                    {/*<Music/>*/}
                </div>

            </div>

        );
    }
}

type MapStateToProps = { isInitialized:boolean }
type AppPropsType= MapStateToProps & MapDispatchToPropsType
    type MapDispatchToPropsType ={setInitializedTC:()=>void}
    let mapStateToProps = (state: AppRootStateType) => {
    return {
        isInitialized: state.app.isInitialized,
    };
};

export default compose<React.ComponentType> (connect(mapStateToProps, { setInitializedTC}),withRouter)(App);


// // addPost: (post: string) => void
// // addMessage: (message: string) => void
// // updateNewPostText: (text: string) => void
// // updateNewMessageText: (text: string) => void
//             {/*<Profile/>*/}
//             {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
//             {/*<Route path={"/profile"} component={Profile}/>*/}
//             {/*<Route path={"/news"} component={News}/>*/}
//             {/*<Route path={"/music"} component={Music}/>*/}
//             {/*<Route path={"/settings"} component={Settings}/>*/}
