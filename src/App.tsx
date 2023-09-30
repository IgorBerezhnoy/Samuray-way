import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {NavbarContainer} from './components/NavBar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {LoginContainer} from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {connect} from 'react-redux';
import {AppRootStateType} from './Redux/redux-store';
import {compose} from 'redux';
import {setInitializedTC} from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.setInitializedTC();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>;
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className={'appWrapper'}>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/Users'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

type MapStateToProps = { isInitialized: boolean }
type AppPropsType = MapStateToProps & MapDispatchToPropsType
type MapDispatchToPropsType = { setInitializedTC: () => void }
let mapStateToProps = (state: AppRootStateType) => {
    return {
        isInitialized: state.app.isInitialized,
    };
};

export default compose<React.ComponentType>(connect(mapStateToProps, {setInitializedTC}), withRouter)(App);
