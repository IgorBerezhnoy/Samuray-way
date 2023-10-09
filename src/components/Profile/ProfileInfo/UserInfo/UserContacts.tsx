import {ProfileType} from '../../../../Redux/profile-reducer';
import React from 'react';

export const UserContacts = (props: { profile: ProfileType }) => {
    const {vk, twitter, instagram, github, mainLink, website} = props.profile.contacts;

    return (<div><b>contacts:</b>
        {
            (mainLink || website || vk || twitter || instagram || github)
                ?
                <div>
                    {mainLink && <div><b>mainLink:</b>{mainLink}</div>}
                    {website && <div><b>website:</b>{website}</div>}
                    {vk && <div><b>vk:</b>{vk}</div>}
                    {twitter && <div><b>twitter:</b>{twitter}</div>}
                    {instagram && <div>instagram: {instagram}</div>}
                    {github && <div><b>github:</b> {github}</div>}
                </div>

                : <> I don't have contacts</>


        }
    </div>);
};