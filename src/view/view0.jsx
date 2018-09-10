import React from 'react'
import {hot} from 'react-hot-loader'
import { SubHeader } from '@/components'

const img0 = require('@/image/img0.png');

const Content = () => {
    return(
        <div>
            <SubHeader title='前言'/>
            <p className='indent'>一般我们开发React 项目，使用到状态管理工具可能是Redux 或者 Mobx. 当然使用Redux 的还是占大部分的。所以本实例还是针对Redux 展开一步一步的解刨。</p>
            <p className='indent'>实际上我们学习并使用Redux 是非常简单的，且能较快的上手并开发。但是Redux 一些概念性的问题或者原理问题是比较复杂的！对于初学者如果没有实际的案例 或者 系统的了解Redux，可能看官网提供的文档都是云里雾里。</p>
            <p className='indent'>自己从对Redux 的学习，参考一些网上的文章基本都是比较零碎，不系统，自然在使用Redux的过程中不怎么理解。自己也是大概花费有2周的时间，对Redux 重要的应用进行归档。如果你通过本文学习Redux，相信对你理解并使用它是很有帮助的，阅读并下载该工程查看具体的Redux 是如何运作的，这比看文档要快很多。</p>
            <p className='indent'>废话不多说。这里如果你在学习本片文章，因为在Redux 设计上还是比较复杂，希望你是一章一章的阅读，这你可能要有点耐心。当然后面文章我会尽量的用通俗的语言去说明。</p>

            <SubHeader title='从NPM 安装'/>
            <p>首先安装我们的Redux：</p>
            <pre>
                <div className='color-green'>// 安装Redux</div>
                <div>npm install redux --save</div>
            </pre>

            <SubHeader title='Redux 核心概念'/>
            <p className='indent'>Redux 主要有以下一个核心的部分，理解了它，在使用Redux 就“心旷神怡”了，如下：</p>
            <ol>
                <li>
                    <p className='color-green indent'><span className='color-red'>Store => </span>使用Redux 是提供给我们状态管理的能力，组件之间根据该状态来确定是否发生变化。状态是State，那么是谁来管理State？ 很明显！Store 就是传说中能管理Stata 的对象。实际我们可以把Store 看成是一个仓库，仓库中包含我们所有需要的状态数据。</p>
                </li>
                <li>
                    <p className='color-green indent'><span className='color-red'>Action => </span>action是唯一Store 的数据来源。是数据从用应用传输到Store 的唯一来源，这样就好理解了。一般通过 store.dispatch({`{..}`}) Action 传入到Store 仓库中。</p>
                </li>
                <li>
                <p className='color-green indent'><span className='color-red'>Reducer => </span>Reducer 是指定应用状态如何响应Action 发送到Store的 。它 是一个纯函数，描述我们如何去更新State，简单的理解状态的变更的逻辑的是在Reducer 函数中处理，处理完成并返回给我们更新之后的State.</p>
                </li>
            </ol>

            <SubHeader title='为什么要使用Redux'/>
            <h4 style={{marginBottom:'5px'}}>为什么要使用Redux?</h4>
            <div>&emsp;&emsp;首先我们知道：在使用React，React 做为构建用户UI 的框架，组件的概念在应用中至关重要。可以简单说，React 项目是所有组件集成为一体的应用。定义组件的方式也极为简单，当你对React 框架熟悉使用之后会发现其可自定义非常强，相比于Angular.js ，React 没有更多在语法规则上的限制。</div>
            <p>&emsp;&emsp;那么当我们的应用程序越来越大，父组件所嵌套子组件越来越多，当顶层组件需要传递Props Data 给最低层组件时，那么就需要往下一层一层的发送传递，如果我们父组件所嵌套有3个子组件，如下图一个华丽式的美国盾牌如示：</p>
            <p className='color-green'>&emsp;&emsp;假设A、B、C、D分别是四个组件，那么A组件就包含了B组件、C组件以及D组件。如果D组件需要接受来自父组件A 的参数，那么在React 中就需要A => B，B => C，最后C 将参数传递给 D。</p>
            <p className='color-green'>&emsp;&emsp;如此一来，我们就需要传递三层，如果当父组件包裹的子组件更多呢？如此以来是代码可维护性越来越差，复杂程度也逐渐提升。</p>
            <p><img src={img0} alt="" width='290px;'/></p>
            <p>&emsp;&emsp;因此如何解决这个问题，此时 Redux 方才“横空出世”。Redux 不仅能有效解决组件之间传值的问题，以及更多时候来告诉我们组件状态，从而判断是否需要对组件进行更新.</p>
            <p>&emsp;&emsp;但是应该知道的是React 和 Redux两者是没有任何牵扯的，分别都是相对独立存在的框架。React 只是选择Redux 做为项目状态管理工具。</p>


        </div>
    )
}


 export default hot(module)(Content);
 