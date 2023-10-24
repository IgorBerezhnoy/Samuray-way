import {addPost, clearPost, profileReducer, ProfileReducerStateType, updateUserStatusAC} from './profile-reducer';

let startState: ProfileReducerStateType;
beforeEach(() => {
    startState = {
        posts: [
            {id: 1, postText: 'Hello world!', like: 4,timeAgo:"",isLiked:false},

        ],
        profile: null,
        status: '', backgrounds:[]
    };
});
test('new post should be added', () => {

    let finishedState = profileReducer(startState, addPost('Hi how are you?'));
    expect(finishedState.posts[0].postText).toBe('Hi how are you?');


});
test('status should be updated', () => {

    let finishedState = profileReducer(startState, updateUserStatusAC('I have a work'));
    expect(finishedState.status).toBe('I have a work');


});
test('the post should be deleted', () => {
    let finishedState = profileReducer(startState, clearPost(1));
    expect(finishedState.posts).toEqual([]);
});
