import React, {ComponentClass} from 'react';
import {Preloader} from '../components/common';


export const withSuspense = (Component: React.FC|ComponentClass ) => {
    return <React.Suspense fallback={<Preloader/>}><Component/></React.Suspense>;
};

