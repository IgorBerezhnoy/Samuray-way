import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {store} from './Redux/redux-store';
import {Provider} from 'react-redux';

export const MainApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>;
};

ReactDOM.render(<MainApp/>,
    document.getElementById('root'));
