import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../common';
import {minLength3, requiredField} from '../../../utils/validators/validators';
import s from '../Login.module.css';
import {formDateType} from '../../../api/Api';
import {InputLogin} from './InputLogin';
import {InputPassword} from './InputPassword';


type PropsType = { captcha: string | null };
export let LoginForm: React.FC<InjectedFormProps<formDateType, PropsType> & PropsType> = (props) => {


  return (<form onSubmit={props.handleSubmit} className={s.login}>
    <div><Field component={InputLogin} validate={[requiredField, minLength3]} name={'login'} placeholder={'Login'}/>
    </div>
    <div><Field component={InputPassword} validate={[requiredField, minLength3]} name={'password'} type={'password'}
                placeholder={'Password'}/></div>
    <div><Field component={'input'} name={'rememberMe'} type={'checkbox'}/>Remember Me</div>
    {props.captcha &&
        <div>
            <img src={props.captcha}/>
            <Field component={Input} validate={[requiredField]} name={'captcha'}/></div>
    }
    <div>
      {props.error && <div className={s.formSummaryError}> {props.error}</div>}
      <button className={`${s.button} ${s.login__submit}`}>
        <span className={s.button__text}>Log In Now</span>
        <i className="but11ton__icon fas fa-chevron-right"></i>
      </button>
    </div>
  </form>)
};

export const LoginReduxForm = reduxForm<formDateType, PropsType>({form: 'login'})(LoginForm);
