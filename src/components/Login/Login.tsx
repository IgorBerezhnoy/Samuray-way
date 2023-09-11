import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {useDispatch} from 'react-redux';
import {loginDateTC} from '../../Redux/auth-reducer';
import {formDateType} from '../../api/Api';

export const Login = () => {
    let
let dispatch=useDispatch()
    const onSubmit=(formDate:any)=>{
let data:formDateType={email:formDate.login as string, password:formDate.password as string, rememberMe:true}
        dispatch(loginDateTC(data))
    }
    return (
        <div><h1>
            Login
        </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

let LoginForm:React.FC<InjectedFormProps> = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div><Field component={'input'} name={"login"} placeholder={'Login'}/></div>
        <div><Field component={'input'} name={"password"} type={'password'} placeholder={'Password'}/></div>
        <div><Field component={'input'} name={"RememberMe"} type={'checkbox'}/>Remember Me</div>
        <div>
            <button>Login</button>
        </div>
    </form>);
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


