import React from 'react';
import {WithAuthRedirect} from '../../hoc';

export const Settings = WithAuthRedirect(() => {
  return (
    <div className={''}>
      Settings
    </div>
  );
});

