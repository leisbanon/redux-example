import React from 'react'
import {hot} from 'react-hot-loader'
import { SubHeader } from '@/components'

const img0 = require('@/image/img0.png');

const Content = () => {
    return(
        <div>
            <SubHeader title='从NPM 安装Redux:'/>
            <p></p>
            <pre>
                <div>npm install redux --save </div>
            </pre>

            <SubHeader title='为什么要使用Redux'/>
            <h4 style={{marginBottom:'5px'}}>为什么要使用Redux?</h4>
            <div>&emsp;&emsp;首先我们知道：在使用React，React 做为构建用户UI 的框架，组件的概念在应用中至关重要。可以简单说，React 项目是所有组件集成为一体的应用。定义组件的方式也极为简单，当你对React 框架熟悉使用之后会理解其扩展性非常强，相比于Angular.js ，React 没有更多在语法规则上的限制。</div>
            <p>&emsp;&emsp;那么当我们的应用程序越来越大，父组件所嵌套子组件越来越多，当顶层组件需要传递Props Data 给最低层组件时，那么就需要往下一层一层的发送传递，如果我们父组件所嵌套有3个子组件，如下图一个华丽式的美国盾牌如示：</p>
            <p className='color-green'>&emsp;&emsp;假设A、B、C、D分别是四个组件，那么A组件就包含了B组件、C组件以及D组件。如果D组件需要接受来自父组件A 的参数，那么在React 中就需要A => B，B => C，最后C 将参数传递给 D。</p>
            <p className='color-green'>&emsp;&emsp;如此一来，我们就需要传递三层，如果当父组件包裹的子组件更多呢？如此以来是代码可维护性越来越差，复杂程度也逐渐提升。</p>
            <p><img src={img0} alt="" width='290px;'/></p>
            <p>&emsp;&emsp;因此如何解决这个问题，此时 Redux 方才“横空出世”。Redux 不仅能有效解决组件之间传值的问题，以及更多时候来告诉我们组件状态，从而判断是否需要对组件进行更新.</p>

            <SubHeader title='Redux 简明介绍'/>
            <p className='indent'>在使用Redux，对Redux 概念的认知是必不可少的！这样更有助有我们队React 开发上的帮助。如果往往是照葫芦画瓢，这样以来在遇到任何棘手的问题却难以切入解决。</p>
            <p className='indent'>Redux 主要有以下一个核心的部分，理解了它，在使用Redux 就心旷神怡了，如下：</p>
            <ol>
                <li>
                    <p className='color-green indent'><span className='color-red'>Store => </span>使用Redux 是提供给我们状态管理的能力，组件之间根据该状态来确定是否发生变化。状态是State，那么是谁来管理State？ 很明显！Store 就是传说中能管理Stata 对象。实际我们可以把Store 看成是一个仓库，仓库中包含我们所有需要的状态数据。</p>
                </li>
                <li>
                    <p className='color-green indent'><span className='color-red'>Action => </span>action是唯一Store 的数据来源。是数据从用应用传输到Store 的唯一来源，这样就好理解了。一般通过 store.dispatch({`{..}`}) Action 传入到Store 仓库中。</p>
                </li>
                <li>
                <p className='color-green indent'><span className='color-red'>Reducer => </span>Reducer 是指定应用状态如何响应Action 发送到Store的 。它 是一个纯函数，描述我们如何去更新State，简单的理解状态的变更的逻辑的是在Reducer 函数中处理，处理完成并返回给我们更新之后的State.</p>
                </li>

            </ol>
        </div>
    )
}


 export default hot(module)(Content);
 