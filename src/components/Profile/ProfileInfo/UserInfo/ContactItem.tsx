import {Field} from 'redux-form';
import {Input} from '../../../common';
import React from 'react';

type PropsType = { contactKey: string, contactValue?: string | null, formMode?: boolean, };
export const ContactItem:React.FC<PropsType> = ({formMode=false,...props}) => {
    if (formMode){
        return (<div><b>{props.contactKey}:</b>
            <Field component={Input} name={props.contactKey} placeholder={props.contactKey}/>
        </div>);
    }else {
        return (<div>
            {props.contactValue && <div><b>{props.contactKey}:</b>{props.contactValue}</div>}
        </div>)
    }
};