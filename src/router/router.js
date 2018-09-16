import React from 'react'
import {Redirect} from 'react-router-dom'
import Loadable from 'react-loadable'


/**
 * 组件异步加载装置 => react-loadables
 * @param {String} filename 
 */
const loadables = (filename) => Loadable({
    loader:() => import(`@/view/${filename}`),
    loading:() => <div></div>
});



/**
 * 根路由集合
 */
const rootRouters = [
    {
        //根路由匹配
        path:'/',
        exact:true,
        component:() => <Redirect to='/redux-example'/>
    },
    {
        // 首页
        path:'/redux-example',
        component:Loadable({
            loader:() => import('@/components/list/list'),
            loading:() => ('')
        })
    },
    {
        // 404 匹配
        path:'*',
        component:loadables('404')
    }
];

/**
 *  嵌套路由集合
 */
const routers = [
    {
        // 组件中状态管理 => state 属性的使用
        path:'/view0',
        component:loadables('view0')
    },
    {
        // Redux 开始。基础示例-源码,分分种入门Redux
        path:'/view1',
        component:loadables('view1')
    },
    {
        // 使用进阶 Action
        path:'/view2',
        component:loadables('view2')
    },
    {
        // 使用进阶 Reducer
        path:'/view3',
        component:loadables('view3')
    },
    {
        // 使用进阶 Store
        path:'/view4',
        component:loadables('view4')
    },
    {
        // 在React 中使用Redux => react-redux
        path:'/view5',
        component:loadables('view5')
    },
    {
        // 异步处理 Action
        path:'/view6',
        component:loadables('view6')
    },
    {
        // combineReducerApi
        path:'/combineReducerApi',
        component:loadables('combineReducerApi')
    },
    {
        // middlewareApi
        path:'/middlewareApi',
        component:loadables('middlewareApi')
    },
    {
        // reduxDevtools
        path:'/reduxDevtools',
        component:loadables('reduxDevtools')
    },
];


export {
    rootRouters,
    routers,
}