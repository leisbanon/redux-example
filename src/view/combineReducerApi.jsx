import React from 'react'
import {
    Link
} from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'

class Views extends React.Component {
    render() {
        return(
            <div>
                <SubHeader title='combineReducerApi'/>
                <p className='indent'>拆分Reducer 是Redux 最基本的应用。随着应用越来越庞大，所需要的State 越来越多，我们应该将reducer 拆分出来。比如现在需管理用户 以及 书籍这两种类型的State，那么我们就需要将这两种类型的State 独立处理一个函数，每个函数独立负责自己的State.</p>
                <p className='indent'>combindReducer 辅助函数实现我们Reducer 的拆分，作用将多个不同的reducer 函数合并成一个reducer 函数。，然后将这个reducer 传递给createStore 方法。</p>
                <p className='indent color-green'>实际前面已经说明了Reducer 的概览以及如何拆分我们的Reducer ，这里做为目录 引用该API，具体请阅读它！转到：</p>
                <Link to='view3'>使用进阶 Reducer</Link>
            </div>
        )
    }
}

export default hot(module)(Views)