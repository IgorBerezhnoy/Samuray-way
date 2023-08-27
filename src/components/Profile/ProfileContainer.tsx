import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfileAC} from '../../Redux/profile-reducer';
import {RootStateType} from '../../Redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type ProfileContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

type PathParamsType = { userId: string }

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainerAPI extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = '2';
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfileAC(response.data);
            });
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

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    };

};


let withURLDataContainerComponent = withRouter(ProfileContainerAPI);

export default connect(mapStateToProps, {setUserProfileAC})(withURLDataContainerComponent);