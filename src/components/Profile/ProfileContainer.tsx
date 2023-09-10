import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {ProfileType, setUserProfileAC, setUserProfileTC} from '../../Redux/profile-reducer';
import {AppRootStateType} from '../../Redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainerAPI extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setUserProfileTC(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    };
};

//
// export default  WithAuthRedirect(withRouter(connect(mapStateToProps,
//     {setUserProfileAC, setUserProfileTC})(ProfileContainerAPI)));

export default compose<React.ComponentType>( connect(mapStateToProps,
    {setUserProfileAC, setUserProfileTC}), withRouter
    // ,WithAuthRedirect
)(ProfileContainerAPI)

//
// let withURLDataContainerComponent = withRouter(ProfileContainerAPI);
//
// export default  WithAuthRedirect(connect(mapStateToProps,
//     {setUserProfileAC, setUserProfileTC})(withURLDataContainerComponent));


// let withURLDataContainerComponent = withRouter(AuthRedirectComponent);

// export default compose<FC>(connect(mapStateToProps,
//     {setUserProfileAC, setUserProfileTC}), WithAuthRedirect, withRouter) (ProfileContainerAPI);

type ProfileContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

type PathParamsType = { userId: string }

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = { setUserProfileAC: (profile: ProfileType) => void, setUserProfileTC: (userId: string) => void }

