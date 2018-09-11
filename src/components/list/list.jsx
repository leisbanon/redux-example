import React from 'react';
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
            <p onClick={() => history.push(`${match.path}/view2`)}>3、使用进阶 Action</p>
            <p onClick={() => history.push(`${match.path}/view3`)}>4、使用进阶 Reducer</p>
            <p onClick={() => history.push(`${match.path}/view4`)}>5、使用进阶 Store</p>
        </div>
    )
})


class List extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.url);
    }
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


export default List;