import React from 'react';
import {WithAuthRedirect} from '../../hoc';

export const Music =WithAuthRedirect( () => {
    return (
        <div className={""}>
           <img  width={"800px"} src={`${process.env.PUBLIC_URL}/img/razrabotke.jpg`} />
        </div>
    );
})

