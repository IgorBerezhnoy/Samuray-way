import React from 'react';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';


export const News = WithAuthRedirect(() => {
    return (
        <div className={""}>
            News
        </div>
    )
})

