import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AuthMeTC, setUserDateAC, StateType,} from '../../Redux/auth-reducer';
import {AppRootStateType} from '../../Redux/redux-store';

export type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        AuthMeTC()
    }

    render() {
        return <Header setUserDateAC={this.props.setUserDateAC} login={this.props.login} isAuth={this.props.isAuth} id={this.props.id}/>;
    }
}

type MapStateToPropsType = { isAuth: boolean, login: string | null, id: number|null }

type MapDispatchToPropsType = { setUserDateAC: (state: StateType) => void }

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authMe.isAuth,
        login: state.authMe.login,
        id: state.authMe.id
    };
};


export default connect(mapStateToProps, {setUserDateAC,AuthMeTC})(HeaderContainer);