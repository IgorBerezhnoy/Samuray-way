import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRootStateType} from '../Redux/redux-store';

type RedirectComponentType = {
    isAuth:boolean
}
type MapStateToPropsForRedirectType = {
    isAuth: boolean
}
    let mapStateToPropsForRedirect = (state: AppRootStateType): MapStateToPropsForRedirectType => ({
        isAuth: state.authMe.isAuth
    });
export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<RedirectComponentType> {
        render() {
            const {isAuth, ...restProps} = this.props
            if (!isAuth) return <Redirect to={'/login'}/>;

            return <Component{...restProps}/>;
        }
    }
   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent
};

