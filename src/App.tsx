import React from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {NavbarContainer} from './components/NavBar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect} from 'react-redux';
import {AppRootStateType} from './Redux/redux-store';
import {compose} from 'redux';
import {setInitializedTC} from './Redux/app-reducer';
import {withSuspense} from './hoc';
import {Preloader} from './components/common';
import {LoginContainer} from './components/Login/LoginContainer';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component<AppPropsType> {


  componentDidMount() {
    this.props.setInitializedTC();

  }

  componentWillUnmount() {
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
          <Switch>
            <Route exact path={'/'} render={() => withSuspense(ProfileContainer)}/>
            <Route  path={'/dialogs'} render={() => withSuspense(DialogsContainer)}/>
            <Route exact path={'/profile/:userId?'} render={() => withSuspense(ProfileContainer)}/>
            <Route exact path={'/Users'} render={() => withSuspense(UsersContainer)}/>
            <Route exact path={'/news'} render={() => <News/>}/>
            <Route exact path={'/music'} render={() => <Music/>}/>
            <Route exact path={'/settings'} render={() => <Settings/>}/>
            <Route exact path={'/login'} render={() => withSuspense(LoginContainer)}/>


            {/*<Route  path='/*' render={()=><h1>not find</h1>} />*/}

            <Route path="/404" render={() => <div>
              <img src="http://ttt.dev.iwa.kz/image.png" width={'1000px'} alt={'Not found 404'}/>

            </div>}/>

            <Redirect from="*" to="/404"/>
          </Switch>
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
