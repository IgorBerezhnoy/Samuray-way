import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';


type ProfileContainerPropsType = { setUserProfileAC: (profile: any) => void }

class ProfileContainerAPI extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/29875`)
            .then(response => {
                this.props.setUserProfileAC(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps = (state: any) => {
    return {

    };

};

export default connect(mapStateToProps, {
 setUserProfileAC: (profile:any) => {}
})(ProfileContainerAPI);