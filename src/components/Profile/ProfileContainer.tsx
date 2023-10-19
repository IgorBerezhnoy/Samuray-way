import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {
    ProfileType,
    savePhoto,
    setUserProfileTC,
    setUserStatusTC,
    updateProfileInfoTC,
    updateStatusTC
} from '../../Redux/profile-reducer';
import {AppRootStateType} from '../../Redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../hoc';
import {formDateDomainType} from '../../api/Api';


class ProfileContainerAPI extends React.Component<CommonPropsType> {

    onUpdateComponent() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myId!.toString();
        }
        this.props.setUserProfileTC(userId);
        this.props.setUserStatusTC(userId);
    }

    componentDidMount() {
        this.onUpdateComponent();
    }

    componentDidUpdate(prevProps: Readonly<CommonPropsType>, prevState: any) {
        console.log('updateProps', prevProps, prevState);

        if (prevProps.match.params.userId !== this.props.match.params.userId) {

            this.onUpdateComponent();
        }

    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatusTC={this.props.updateStatusTC} isOwner={this.props.myId == this.props.id}
                     savePhoto={this.props.savePhoto} myId={this.props.myId} updateProfileInfoTC={this.props.updateProfileInfoTC}
                     backgrounds={this.props.backgrounds} postsLeng={this.props.postsLeng}/>
        );
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.profilePage.profile?.userId,
        myId: state.authMe.id,
        backgrounds:state.profilePage.backgrounds,
        postsLeng:state.profilePage.posts.length
    };
};

export default compose<React.ComponentType>(connect(mapStateToProps,
        {setUserStatusTC, setUserProfileTC, updateStatusTC, savePhoto, updateProfileInfoTC}), withRouter, WithAuthRedirect
    // ,WithAuthRedirect
)(ProfileContainerAPI);

export type ProfileContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

type PathParamsType = { userId: string }

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type MapStateToPropsType = {
    postsLeng:number
    profile: ProfileType | null,
    status: string
    id?: number | null | string
    myId: number | null
    backgrounds:string[]

}
type MapDispatchToPropsType = {
    setUserProfileAC: (profile: ProfileType) => void, setUserProfileTC: (userId: string) => void,
    setUserStatusTC: (userId: string) => void, updateStatusTC: (status: string) => void,
    savePhoto: (event: File) => void, updateProfileInfoTC:(profileInfo: formDateDomainType)=>void
}


//
// export default  WithAuthRedirect(withRouter(connect(mapStateToProps,
//     {setUserProfileAC, setUserProfileTC})(ProfileContainerAPI)));

//
// let withURLDataContainerComponent = withRouter(ProfileContainerAPI);
//
// export default  WithAuthRedirect(connect(mapStateToProps,
//     {setUserProfileAC, setUserProfileTC})(withURLDataContainerComponent));


// let withURLDataContainerComponent = withRouter(AuthRedirectComponent);

// export default compose<FC>(connect(mapStateToProps,
//     {setUserProfileAC, setUserProfileTC}), WithAuthRedirect, withRouter) (ProfileContainerAPI);
