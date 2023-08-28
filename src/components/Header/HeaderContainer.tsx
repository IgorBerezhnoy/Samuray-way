import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {setUserDateAC, StateType,} from '../../Redux/auth-reducer';
import {RootStateType} from '../../Redux/redux-store';
import {AuthMeApi} from '../../api/Api';

export type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {

        AuthMeApi()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    this.props.setUserDateAC(res.data.data);
                }
            });
    }

    render() {
        return <Header setUserDateAC={this.props.setUserDateAC} login={this.props.login} isAuth={this.props.isAuth} id={this.props.id}/>;
    }
}

type MapStateToPropsType = { isAuth: boolean, login: string | null, id: number|null }

type MapDispatchToPropsType = { setUserDateAC: (state: StateType) => void }

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authMe.isAuth,
        login: state.authMe.login,
        id: state.authMe.id
    };
};


export default connect(mapStateToProps, {setUserDateAC})(HeaderContainer);