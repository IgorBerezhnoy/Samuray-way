import {Field} from 'redux-form';
import {Input} from '../../../common';
import React from 'react';
import {validateWebsiteLink} from '../../../../utils/validators/validators';

type PropsType = { contactKey: string, contactValue?: string | null, formMode?: boolean, };
export const ContactItem:React.FC<PropsType> = ({formMode=false,...props}) => {
    if (formMode){
        return (<tr>
            <td><b>{props.contactKey}:</b></td>
            <td><Field component={Input} name={props.contactKey} placeholder={props.contactKey}
                       validate={[validateWebsiteLink]}/></td>

        </tr>);
    }else {
        return (<div>
            {props.contactValue && <div><b>{props.contactKey}:</b>{props.contactValue}</div>}
        </div>)
    }
};