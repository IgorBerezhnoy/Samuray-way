import React from 'react';
import {formDateType} from '../../api/Api';
import {Redirect} from 'react-router-dom';
import {LoginReduxForm} from './LoginForm/LoginForm';
import s from './Login.module.css';
import './Login_style.css';

type PropsType = {
  isAuth: boolean,
  loginDateTC: (data: formDateType) => void,
  setErrorAC: (error: string|null) => void,
  captcha: string | null,
  errorMessage: string | null
}


export const Login: React.FC<PropsType> = ({isAuth, loginDateTC, captcha, errorMessage, ...restProps}) => {
  const onSubmit = (formDate: any) => {
    let data: formDateType = {
      email: formDate.login as string,
      password: formDate.password as string,
      rememberMe: formDate.rememberMe as boolean,
      captcha: formDate.captcha as string
    };
    loginDateTC(data);
  };
  if (isAuth) {
    return <Redirect to={'profile'}/>;
  }
  return (
    <div>
      <div className={s.container}>
        <div className={s.screen}>
          <div className={s.screen__content}>
            <div className={s.freeLoginAndPass}>
              <div className={s.freeLoginAndPass__wrapp}>
                <div className={s.freeLoginAndPass__email}><b>Email:</b> free@samuraijs.com</div>
                <div className={s.freeLoginAndPass__password}><b>Password:</b> free</div>

              </div>
            </div>
            <LoginReduxForm onSubmit={onSubmit} captcha={captcha} errorMessage={errorMessage} setError={restProps.setErrorAC}/>
            <div className={s.socialLogin}>
              <h3>log in via</h3>
              <div className={s.socialIcons}>
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div>
          </div>
          <div className={s.screen__background}>


            <span className={`${s.screen__background__shape} ${s.screen__background__shape4}`}></span>
            <span className={`${s.screen__background__shape} ${s.screen__background__shape3}`}></span>
            <span className={`${s.screen__background__shape} ${s.screen__background__shape2}`}></span>
            <span className={`${s.screen__background__shape} ${s.screen__background__shape1}`}></span>
          </div>
        </div>
      </div>

    </div>
  );

};




