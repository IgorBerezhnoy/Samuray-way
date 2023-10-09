import React from 'react';
import {formDateType} from '../../api/Api';
import {Redirect} from 'react-router-dom';
import {LoginReduxForm} from './LoginForm';

type PropsType = {
    isAuth: boolean,
    loginDateTC: (data: formDateType) => void
}

export const Login: React.FC<PropsType> = ({isAuth, loginDateTC, ...restProps}) => {
    const onSubmit = (formDate: any) => {
        let data: formDateType = {
            email: formDate.login as string,
            password: formDate.password as string,
            rememberMe: formDate.rememberMe as boolean
        };
        loginDateTC(data);
    };
    if (isAuth) {
        return <Redirect to={'profile'}/>;
    }
    return (
        <div><h1>
            Login
        </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};




