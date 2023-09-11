import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {ProfileType, setUserProfileTC, setUserStatusTC, updateStatusTC} from '../../Redux/profile-reducer';
import {AppRootStateType} from '../../Redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainerAPI extends React.Component<CommonPropsType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        this.props.setUserProfileTC(userId);
        this.props.setUserStatusTC(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusTC={updateStatusTC}/>
        );
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    };
};

//
// export default  WithAuthRedirect(withRouter(connect(mapStateToProps,
//     {setUserProfileAC, setUserProfileTC})(ProfileContainerAPI)));

export default compose<React.ComponentType>(connect(mapStateToProps,
        {setUserStatusTC, setUserProfileTC, updateStatusTC}), withRouter
    // ,WithAuthRedirect
)(ProfileContainerAPI);

//
// let withURLDataContainerComponent = withRouter(ProfileContainerAPI);
//
// export default  WithAuthRedirect(connect(mapStateToProps,
//     {setUserProfileAC, setUserProfileTC})(withURLDataContainerComponent));


// let withURLDataContainerComponent = withRouter(AuthRedirectComponent);

// export default compose<FC>(connect(mapStateToProps,
//     {setUserProfileAC, setUserProfileTC}), WithAuthRedirect, withRouter) (ProfileContainerAPI);

export type ProfileContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

type PathParamsType = { userId: string }

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type MapStateToPropsType = {
    profile: ProfileType | null,
    status: string
}
type MapDispatchToPropsType = { setUserProfileAC: (profile: ProfileType) => void, setUserProfileTC: (userId: string) => void,
    setUserStatusTC: (userId: string) => void, updateStatusTC: (status: string) => void }

