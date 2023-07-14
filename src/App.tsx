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
import { StateType} from './Redux/State';


type PropsType = {
    state: StateType
    addPost: (post: string) => void
    addMessage: (message: string) => void
    updateNewPostText: (text: string) => void
    updateNewMessageText: (text: string) => void
}

const App: React.FC<PropsType> = (props) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.navbar} friends={props.state.dialogsPage.dialogs}/>
            <div className={'appWrapper'}>
                {/*<Profile/>*/}
                {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
                {/*<Route path={"/profile"} component={Profile}/>*/}
                {/*<Route path={"/news"} component={News}/>*/}
                {/*<Route path={"/music"} component={Music}/>*/}
                {/*<Route path={"/settings"} component={Settings}/>*/}

                <Route path={'/dialogs'}
                       render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage}
                                              newMessageText={props.state.dialogsPage.newMessageText}
                                              updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost}
                                              newPostText={props.state.profilePage.newPostText}
                                              updateNewPostText={props.updateNewPostText}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                {/*<Music/>*/}
            </div>

        </div>

    );
};


export default App;
