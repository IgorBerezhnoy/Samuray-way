import React from 'react';
import {addPost, PostType, updateNewPostText} from '../../../Redux/profile-reducer';
import {connect} from 'react-redux';
import {MyPosts} from './MyPosts';
import {AppRootStateType} from '../../../Redux/redux-store';


// type PropsType = {
//     state: { posts: PostsType, newPostText: string }
//     dispatch: (action: ActionType) => void
// }
export type MyPostContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = { posts: PostType[], newPostText: string, }
type mapDispatchToPropsType = {
    addPost: () => void,
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
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