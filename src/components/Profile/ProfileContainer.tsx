import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {ProfileType, setUserProfileAC, setUserProfileTC} from '../../Redux/profile-reducer';
import {AppRootStateType} from '../../Redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type ProfileContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

type PathParamsType = { userId: string }

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainerAPI extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        setUserProfileTC(userId);

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = { setUserProfileAC: (profile: ProfileType) => void }

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    };

};


let withURLDataContainerComponent = withRouter(ProfileContainerAPI);

export default connect(mapStateToProps,
    {setUserProfileAC, setUserProfileTC})(withURLDataContainerComponent);