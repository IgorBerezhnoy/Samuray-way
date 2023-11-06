import {AppRootStateType} from '../../Redux/redux-store';
import {connect} from 'react-redux';
import {loginDateTC, setErrorAC} from '../../Redux/auth-reducer';
import {Login} from './Login';

let mapStateToProps = (state: AppRootStateType) => {
  return {
    isAuth: state.authMe.isAuth,
    captcha:state.authMe.captcha,
    errorMessage:state.authMe.errorMessage

  };
};
export let LoginContainer = connect(mapStateToProps, {
  loginDateTC,
  setErrorAC
})(Login);