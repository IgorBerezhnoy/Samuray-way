import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostContainerPropsType} from './MyPostsContainer';
import {AddPostReduxForm} from './AddPostForm/AddPostForm';


export const MyPosts = React.memo((props: MyPostContainerPropsType) => {

    let postsItems = props.posts.map(el =>
        <Post key={el.id} postText={el.message} likeCount={el.like} photo={props.photo?.small!} timeAgo={el.timeAgo} userName={props.userName}/>);

    const onSubmit = (formDate: any) => {
      if (formDate.newPostBody.trim()){
        props.addPost(formDate.newPostBody);
        formDate.newPostBody = '';
      }

    };

    return (
        <div className={s.postsBlock}>

          <div className={s.header}><h3>My post</h3>
            <div>
              <AddPostReduxForm onSubmit={onSubmit}/>
            </div>
          </div>
            <div className={s.posts}>
                <div>{postsItems}
                </div>
            </div>
        </div>

    );
});


// const OnClickEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === 'Enter') {
//         addPost();
//     }
// };
//
// const onPostChange = () => {
//     debugger
//     let text = newPostElement.current?.value;
//     if (text) {
//         // const action: ActionType = updateNewPostTextTypeAC(text);
//         // props.dispatch(action);
//         this.props.updateNewPostText(text);
//     }
// };

//
// let newPostElement = React.createRef<HTMLTextAreaElement>();

// const addPost = () => {
//
//
//     let text = newPostElement.current?.value;
//     if (text) {
//         // const action = AddPostActionCreator();
//         // props.dispatch(action);
//         this.props.addPost();
//     }

// };