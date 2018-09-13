import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/style/style.css'
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import store from '@/store/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();
