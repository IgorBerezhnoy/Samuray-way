import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/NavBar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {DialogsType, MassagesType, PostsType} from './index';


type PropsType={
    posts:PostsType
    messages:MassagesType
    dialogs:DialogsType
}

const App :React.FC<PropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'appWrapper'}>
                    {/*<Profile/>*/}
                    {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
                    {/*<Route path={"/profile"} component={Profile}/>*/}
                    {/*<Route path={"/news"} component={News}/>*/}
                    {/*<Route path={"/music"} component={Music}/>*/}
                    {/*<Route path={"/settings"} component={Settings}/>*/}

                    <Route path={'/dialogs'} render={() => <Dialogs messages={props.messages} dialogs={props.dialogs} />}/>
                    <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    {/*<Music/>*/}
                </div>

            </div>
        </BrowserRouter>
    );
};


export default App;
