import React from 'react'
import { Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'

class Views extends React.Component {
    constructor(props) {
        super(props);
        this.reduxLogger = require('@/image/redux-logger.png');
    }
    render() {
        return(
            <div>
                <SubHeader title='middlewareApi'/>
                <p className='indent'>redux middleware。 即在Redux 中使用中间件来扩展Redux  功能的一种方式。往往在实际的项目中middleware 的配置和应用都是存在的。本章节就主要说明如果应用Redux MiddleWare。 实际也非常简单，只需要一点点的配置。但是这也是需要熟悉的部分。</p>
                <p className='color-green indent'>Redux 提供了applyMiddleware 方法来加载我们的中间件，一般来说扩展中间件程序Redux 都提供出来了。除非你有其他的需要编写自己的中间件程序。如下就介绍 redux-logger 以及 redux-thunk 这个两个中间的应用：</p>

                <SubHeader title='中间件 redux-logger'/>
                <p className='indent'>这是Redux 日志中间件程序,用于打印Action 日志。当我们Store Dispatch 成功后，控制台会打印相关的Action 以及 State 信息.</p>
                <img src={this.reduxLogger} alt="" width='100%'/>
                <pre>
                    <strong>安装：</strong>
                    <div>npm i redux-logger --save-dev</div><br/>

                    <strong>使用：</strong>
                    <code>{`
                    import reducer from './reducers'
                    import {createStore,applyMiddleware} from 'redux'
                    import {createLogger} from 'redux-logger'

                    const loggerMiddleware = createLogger({
                        `}
                        <span className='color-green'>// 这里对答应日志折叠起来。详情API ：<a className='color-red' target='__black' href="https://www.npmjs.com/package/redux-logger">配置参考</a></span>
                        {`
                        collapsed:true,
                    });

                    const store = createStore(
                        reducer,
                        applyMiddleware(
                            loggerMiddleware,
                        ),
                    );
                    `}</code>
                </pre>

                <SubHeader title='中间件 redux-thunk'/>
                <p className='indent'>使用redux-thunk 构建异步Action 函数。在前面文章已经描述到了。如何使用它请转到这一篇文章并阅读它：<Link to='view5'>在React 中使用Redux => react-redux</Link></p>
                <pre>
                    <strong>安装：</strong>
                    <div>npm i redux-thunk --save-dev</div><br/>

                    <strong>使用：</strong>
                    <pre>
                    <code>{`
                    import reducer from './reducers'
                    import {createStore,applyMiddleware} from 'redux'
                    import {createLogger} from 'redux-logger'

                    import thunkMiddleware from 'redux-thunk'

                    const loggerMiddleware = createLogger({
                        `}
                        <span className='color-green'>// 这里对答应日志折叠起来。详情API ：<a className='color-red' target='__black' href="https://www.npmjs.com/package/redux-logger">配置参考</a></span>
                        {`
                        collapsed:true,
                    });

                    const store = createStore(
                        reducer,
                        applyMiddleware(
                            loggerMiddleware,
                            thunkMiddleware,
                        ),
                    );
                    `}</code>
                    </pre>
                </pre>
            </div>
        )
    }
}

export default hot(module)(Views)