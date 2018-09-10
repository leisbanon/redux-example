/**
 * createStore：方法创建Redux Store
 * applyMiddleware：生成中间件
 */
import {createStore,applyMiddleware} from 'redux'

// Redux中间件模块，对Store Dispatch的功能增强
import {createLogger} from 'redux-logger'

// 浏览器redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'

const loggerMiddleware = createLogger({
    collapsed:true,
});

const store = createStore(
    reducer,
    composeWithDevTools(),
    // applyMiddleware(loggerMiddleware),
);

export default store;

