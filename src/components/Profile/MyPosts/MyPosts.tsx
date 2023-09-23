import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostContainerPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength30, requiredField} from '../../../utils/validators/validators';
import {Input} from '../../common/FormsControls/FormsControls';


export const MyPosts=React.memo( (props: MyPostContainerPropsType)=> {

    console.log('MyPosts');
    let postsItems = props.posts.map(el =>
        <Post key={el.id} message={el.message} like={el.like}/>);
    const onSubmit = (formDate: any) => {
        console.log(formDate);
        props.addPost(formDate.newPostBody);
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
})

const AddPostForm: React.FC<InjectedFormProps> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'newPostBody'} placeholder={'Enter your post'}
                       validate={[requiredField, maxLength30]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </form>
    );
}

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