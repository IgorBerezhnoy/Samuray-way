import React from 'react';
import {ActionType, PostsType} from '../../../Redux/Store';
import {AddPostActionCreator, updateNewPostTextTypeAC} from '../../../Redux/profile-reducer';
import {MyPosts} from './MyPosts';


type PropsType = {
    state: { posts: PostsType, newPostText: string }
    dispatch: (action: ActionType) => void
}


export const MyPostsContainer: React.FC<PropsType> = (props) => {

    const addPost = () => {
        const action = AddPostActionCreator();
        props.dispatch(action);

    };


    const onPostChange = (text: string) => {
        const action: ActionType = updateNewPostTextTypeAC(text);
        props.dispatch(action);

    };

    return (
        <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} updateNewPostText={onPostChange} addPost={addPost}/>

    );
};
