import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {authMeTC, logOutTC,} from '../../Redux/auth-reducer';
import {AppRootStateType} from '../../Redux/redux-store';
import {setUserProfileTC} from '../../Redux/profile-reducer';

export type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {

    }

    render() {

        // @ts-ignore
        return <Header logOutTC={this.props.logOutTC} login={this.props.login} isAuth={this.props.isAuth} id={this.props.id} setUserProfileTC={this.props.setUserProfileTC}/>;
    }
}

type MapStateToPropsType = { isAuth: boolean, login: string | null, id: number|null }

type MapDispatchToPropsType = { setUserProfileTC : (id:string)=>void, logOutTC:()=>void}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authMe.isAuth,
        login: state.authMe.login,
        id: state.authMe.id
    };
};


export default connect(mapStateToProps, {authMeTC,setUserProfileTC, logOutTC})(HeaderContainer);