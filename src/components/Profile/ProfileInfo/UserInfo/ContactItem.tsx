import {Field} from 'redux-form';
import {Input} from '../../../common';
import React from 'react';
import {minLength3, requiredField, validateWebsiteLink} from '../../../../utils/validators/validators';
import s from '../../../Login/Login.module.css';

type PropsType = { contactKey: string, contactValue?: string | null, formMode?: boolean, };
export const ContactItem:React.FC<PropsType> = ({formMode=false,...props}) => {
    if (formMode){
        return (<div><b>{props.contactKey}:</b>
            <Field component={Input} name={props.contactKey} placeholder={props.contactKey} validate={[validateWebsiteLink]}/>

        </div>);
    }else {
        return (<div>
            {props.contactValue && <div><b>{props.contactKey}:</b>{props.contactValue}</div>}
        </div>)
    }
};