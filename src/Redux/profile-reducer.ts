import {ActionType, PostsType, PostType} from './Store';

type StateType = {  posts: PostsType, newPostText: string }

export type AddPostTypeAT = { type: 'ADD-POST' }
export type  updateNewPostTextTypeAT = { type: 'UPDATE-NEW-POST-TEXT', newText: string }


const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState: StateType = {
            posts: [
                {id: 1, message: 'Hello world!', like: 4},
                {id: 2, message: 'Hi how are you?', like: 432},
                {id: 3, message: 'post 3', like: 32},
                {id: 3, message: 'Yo', like: 0}
            ],
            newPostText: '',
};
export const profileReducer = (state:StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            console.error('New Error');
            return state;
    }

};
export const AddPostActionCreator = (): AddPostTypeAT => ({type: ADD_POST});
export const updateNewPostTextTypeAC = (text: string): updateNewPostTextTypeAT => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});