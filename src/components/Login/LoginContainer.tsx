import {AppRootStateType} from '../../Redux/redux-store';
import {connect} from 'react-redux';
import {loginDateTC} from '../../Redux/auth-reducer';
import {Login} from './Login';

let mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.authMe.isAuth
    };
};
export let LoginContainer = connect(mapStateToProps, {
    loginDateTC
})(Login);