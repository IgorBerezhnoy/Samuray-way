import React from 'react';
import {addFriendMessage, addMessage} from '../../Redux/diologs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../Redux/redux-store';
import {WithAuthRedirect} from '../../hoc';
import {compose} from 'redux';

let mapStateToProps = (state: AppRootStateType) => {
  return {
    dialogsPage: state.dialogsPage,
    userName: state.authMe.login,
    userPhoto:state.profilePage.profile?.photos.small
  };
};

export default compose<React.ComponentType>(connect(mapStateToProps, {
  addMessage, addFriendMessage
}), WithAuthRedirect)(Dialogs);
