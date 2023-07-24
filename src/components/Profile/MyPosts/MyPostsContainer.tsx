import React from 'react';
import {ActionType, PostsType} from '../../../Redux/Store';
import {AddPostActionCreator, updateNewPostTextTypeAC} from '../../../Redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../StoreContext';


// type PropsType = {
//     state: { posts: PostsType, newPostText: string }
//     dispatch: (action: ActionType) => void
// }


export const MyPostsContainer: React.FC = (props) => {

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

    return (
        <StoreContext.Consumer>{
            (store)=> {
                const addPost = () => {
                    const action = AddPostActionCreator();
                    store.dispatch(action);

                };


                const onPostChange = (text: string) => {
                    const action: ActionType = updateNewPostTextTypeAC(text);
                    store.dispatch(action);

                };

                return (
                    <MyPosts posts={store.getState().profilePage.posts}
                             newPostText={store.getState().profilePage.newPostText}
                             updateNewPostText={onPostChange}
                             addPost={addPost}/>);
            }
        }
        </StoreContext.Consumer>

    );
};
