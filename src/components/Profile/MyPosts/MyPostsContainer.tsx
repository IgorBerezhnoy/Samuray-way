import React from 'react';
import {ActionType, StateType} from '../../../Redux/Store';
import {addPost, updateNewPostText} from '../../../Redux/profile-reducer';
import {connect} from 'react-redux';
import {Dialogs} from '../../Dialogs/Dialogs';
import {MyPosts} from './MyPosts';


// type PropsType = {
//     state: { posts: PostsType, newPostText: string }
//     dispatch: (action: ActionType) => void
// }


let mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage
    };
};


export const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText
})(MyPosts);

//
//
// export const MyPostsContainer: React.FC = (props) => {

// const addPost = () => {
//     const action = AddPostActionCreator();
//     props.dispatch(action);
//
// };
//
//
// const onPostChange = (text: string) => {
//     const action: ActionType = updateNewPostTextTypeAC(text);
//     props.dispatch(action);
//
// };

//     return (
//         <StoreContext.Consumer>{
//             (store)=> {
//                 const addPost = () => {
//                     const action = AddPostActionCreator();
//                     store.dispatch(action);
//
//                 };
//
//
//                 const onPostChange = (text: string) => {
//                     const action: ActionType = updateNewPostTextTypeAC(text);
//                     store.dispatch(action);
//
//                 };
//
//                 return (
//                     <MyPosts posts={store.getState().profilePage.posts}
//                              newPostText={store.getState().profilePage.newPostText}
//                              updateNewPostText={onPostChange}
//                              addPost={addPost}/>);
//             }
//         }
//         </StoreContext.Consumer>
//
//     );
// };
//