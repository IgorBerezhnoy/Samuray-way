import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/NavBar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {ActionType, StateType} from './Redux/Store';


import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/NavBar/NavbarContainer';

//
// type PropsType = {
//     state: StateType
//     dispatch:(action:ActionType)=>void
// }

const App: React.FC = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            {/*<Navbar state={props.state.navbar} friends={props.state.dialogsPage.dialogs}/>*/}
            <NavbarContainer />
            <div className={'appWrapper'}>
                <Route path={'/dialogs'}
                       // render={() => <DialogsContainer  state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                       render={() => <DialogsContainer />}/>
                <Route path={'/profile'}
                       // render={() => <Profile state={props.state.profilePage}  dispatch={props.dispatch}/>}/>
                       render={() => <Profile />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                {/*<Music/>*/}
            </div>

        </div>

    );
};

export default App;
    // addPost: (post: string) => void
    // addMessage: (message: string) => void
    // updateNewPostText: (text: string) => void
    // updateNewMessageText: (text: string) => void
                {/*<Profile/>*/}
                {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
                {/*<Route path={"/profile"} component={Profile}/>*/}
                {/*<Route path={"/news"} component={News}/>*/}
                {/*<Route path={"/music"} component={Music}/>*/}
                {/*<Route path={"/settings"} component={Settings}/>*/}
