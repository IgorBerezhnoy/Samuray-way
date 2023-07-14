import React, {KeyboardEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {
    ActionType,
    AddPostActionCreator,
    PostsType, updateNewPostTextTypeAC,
} from '../../../Redux/State';


type PropsType = {
    state: { posts: PostsType, newPostText: string }
    dispatch: (action: ActionType) => void
}



export const MyPosts: React.FC<PropsType> = (props) => {

    let postsItems = props.state.posts.map(el => <Post key={el.id} message={el.message} like={el.like}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current?.value;
        if (text) {
            const action = AddPostActionCreator();
            props.dispatch(action);
        }
    };

    const OnClickEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPost();
        }
    };

    const onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text) {
            const action: ActionType = updateNewPostTextTypeAC(text);
            props.dispatch(action);
        }
    };

    return (
        <div className={s.postsBlock}>

            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText}
                              onKeyPress={OnClickEnter}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <div>{postsItems}
                </div>
            </div>
        </div>

    );
};
