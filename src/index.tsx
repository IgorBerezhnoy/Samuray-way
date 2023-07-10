import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './Redux/State';


// export type PostType = {
//     id:number
//     message: string
//     like:number
// }
// export type PostsType=PostType[]
//
// export type DialogType = {
//     id:string
//     name: string
// }
// export type DialogsType=DialogType[]
//
// export type MassageType = {
//     id:number
//     message: string
// }
// export type MassagesType=MassageType[]
//
//
// let dialogs:DialogsType = [
//     {id: '1', name: 'Dimych'},
//     {id: '2', name: 'Andrew'},
//     {id: '3', name: 'Sveta'},
//     {id: '4', name: 'Sasha'},
//     {id: '5', name: 'Valera'},
//     {id: '6', name: 'Viktor'},
// ];
// let messages:MassagesType = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How are you?'},
//     {id: 3, message: 'What are you doing'},
//     {id: 3, message: 'Yo'}
// ];
//
// let posts:PostsType = [
//     {id: 1, message: 'Hello world!', like: 4},
//     {id: 2, message: 'Hi how are you?', like: 432},
//     {id: 3, message: 'post 3', like: 32},
//     {id: 3, message: 'Yo', like: 0}
// ];

ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);