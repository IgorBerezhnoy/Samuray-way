import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfileAC} from '../../Redux/profile-reducer';
import {RootStateType} from '../../Redux/redux-store';


type ProfileContainerPropsType = { setUserProfileAC: (profile: ProfileType) => void, profile:ProfileType }

class ProfileContainerAPI extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/29862`)
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

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile
    };

};

// @ts-ignore
export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainerAPI);