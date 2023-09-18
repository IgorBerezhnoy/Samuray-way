import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {loginDateTC} from '../../Redux/auth-reducer';
import {formDateType} from '../../api/Api';
import {AppRootStateType} from '../../Redux/redux-store';
import {Redirect} from 'react-router-dom';
import {Input} from '../common/FormsControls/FormsControls';
import {minLength, requiredField} from '../../utils/validators/validators';

type PropsType = {
    isAuth: boolean,
    loginDateTC: (data: formDateType) => void
}


export const Login = (props: PropsType) => {
    const onSubmit = (formDate: any) => {
        let data: formDateType = {
            email: formDate.login as string,
            password: formDate.password as string,
            rememberMe: formDate.rememberMe as boolean
        };
        props.loginDateTC(data);
    };
    if (props.isAuth) {
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


let mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.authMe.isAuth
    };
};

export let LoginContainer = connect(mapStateToProps, {
    loginDateTC
})(Login);




let LoginForm: React.FC<InjectedFormProps> = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div><Field component={Input} validate={[requiredField, minLength]} name={'login'} placeholder={'Login'}/>
        </div>
        <div><Field component={Input} validate={[requiredField, minLength]} name={'password'} type={'password'}
                    placeholder={'Password'}/></div>
        <div><Field component={'input'} name={'rememberMe'} type={'checkbox'}/>Remember Me</div>
        <div>
            <button>Login</button>
        </div>
    </form>);
};


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


