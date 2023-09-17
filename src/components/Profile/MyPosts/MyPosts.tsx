import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostContainerPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


export class MyPosts extends React.Component<MyPostContainerPropsType> {
    render() {

        console.log(this.props.posts);
        let postsItems = this.props.posts.map(el => <Post key={el.id}
                                                          message={el.message} like={el.like}/>);
        const onSubmit = (formDate: any) => {
            console.log(formDate);
            this.props.addPost(formDate.newPostBody);
            formDate.newPostBody = '';
        };
        return (
            <div className={s.postsBlock}>

                <h3>My post</h3>
                <div>
                    <AddPostReduxForm onSubmit={onSubmit}/>
                </div>
                <div className={s.posts}>
                    <div>{postsItems}
                    </div>
                </div>
            </div>

        );
    }


}

const AddPostForm: React.FC<InjectedFormProps> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'newPostBody'} placeholder={'Enter your post'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </form>
    );
};

const AddPostReduxForm = reduxForm({form: 'MyPostsAddMessageForm'})(AddPostForm);


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