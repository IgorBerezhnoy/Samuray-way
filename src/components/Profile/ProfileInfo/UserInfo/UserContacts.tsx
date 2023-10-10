import {ProfileType} from '../../../../Redux/profile-reducer';
import React from 'react';
import {Field} from 'redux-form';
import {Input} from '../../../common';
import {ContactItem} from './ContactItem';

export const UserContacts = (props: { profile: ProfileType }) => {
    const conKey = Object.keys(props.profile.contacts);
    const conVal = Object.values(props.profile.contacts);
    let contacts = [];
    for (let i = 0; i < conKey.length; i++) {
        contacts.push(
            <ContactItem contactKey={conKey[i]} contactValue={conVal[i]}/>
        );
    }

    return (<div><b>contacts:</b>
        {
            (conVal.filter(el=>el!==null).length)
                ?
                <div>
                    {contacts}
                </div>

                : <> I don't have contacts</>


        }
    </div>);
};