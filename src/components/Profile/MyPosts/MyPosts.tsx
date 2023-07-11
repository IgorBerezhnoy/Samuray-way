import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

type PostsType = {
    id: number
    message: string
    like: number
}
type PropsType = {
    posts: PostsType[]
    addPost: (post: string) => void
}

export const MyPosts: React.FC<PropsType> = (props) => {

    let postsItems = props.posts.map(el => <Post key={el.id} message={el.message} like={el.like}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current?.value;
        if (text) {
            props.addPost(text);
            console.log(props.posts);
            console.log(text);
        }
    };

    const onPostChange=()=>{

    }
    return (
        <div className={s.postsBlock}>

            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={"it-kamasutra"}/>
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
