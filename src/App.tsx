import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className="app-wrapper">
            <header className={'header'}><img src={'https://partsouq.com/images/logos-transparent/jeep.png'}/></header>
            <nav className={'nav'}>
                <div><a href={''}>Profile</a></div>
                <div><a href={''}>Messages</a></div>
                <div><a href={''}>News</a></div>
                <div><a href={''}>Settings</a></div>
            </nav>
            <div className={'content'}>
                <div><img src={'https://img5.goodfon.ru/original/800x480/0/67/kanada-ozero-bow-lake-1.jpg'}/></div>
                <div><img src={'https://wa-groups.ru/img/user5.png'} width={'200px'}/> avatar + description</div>
                <div>My post
                    <div>New post
                        <div>post 1</div>
                        <div>post 1</div>
                        <div>post 1</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default App;
