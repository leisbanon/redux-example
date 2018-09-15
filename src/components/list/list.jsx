import React from 'react';
import { hot } from 'react-hot-loader'
import './list.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter,
  } from 'react-router-dom'

import {routers} from '@/router/router'

const Content = withRouter(({history,location,match}) => {
    return(
        <div className='list'>
            <p onClick={() => history.push(`${match.path}/view0`)}>0、Redux 简明介绍 以及 安装使用</p>
            <p onClick={() => history.push(`${match.path}/view1`)}>1、Redux 开始。基础示例-源码,（分分种入门Redux）</p>
            <p onClick={() => history.push(`${match.path}/view2`)}>2、使用进阶 Action</p>
            <p onClick={() => history.push(`${match.path}/view3`)}>3、使用进阶 Reducer</p>
            <p onClick={() => history.push(`${match.path}/view4`)}>4、使用进阶 Store</p>
            <p onClick={() => history.push(`${match.path}/view5`)}>5、在React 中使用Redux => react-redux</p>
            <p onClick={() => history.push(`${match.path}/view6`)}>6、异步处理 Action（构建我们的异步Action 函数）</p>
            <strong>主要API使用 以及 其他配置：</strong>
            <ul>
                <li><p onClick={() => history.push(`${match.path}/combineReducerApi`)}>reducer 拆分。 combineReducers Api：</p></li>
                <li><p onClick={() => history.push(`${match.path}/middlewareApi`)}>Reedux 中间件的安装。applyMiddleware Api</p></li>
                <li><p onClick={() => history.push(`${match.path}/reduxDevtools`)}>扩展浏览器插件对Redux 状态可视化查看：redux-devtools。</p></li>
            </ul>
        </div>
    )
})


class List extends React.Component {
    render() {
        return(
            <div className='app-container'>
                <Content />
                <Switch>
                    {
                        routers.map((route,index) => {
                            return(
                                <Route
                                key={index}
                                exact
                                path={`${this.props.match.url}` + route.path}
                                component={route.component}
                                />
                            )
                        })
                    }
                    
                </Switch>
            </div>
        )
    }
}


export default hot(module)(List);