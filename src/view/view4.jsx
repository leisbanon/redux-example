import React from 'react'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'

class View4 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <SubHeader title='使用进阶 Reducer'/>
                <p className='indent'>前面说到,Reducer 描述我们该如何改变State。Action 只是描述有状态事件的发生，并没有描述我们该如何更新State.</p>
                <p>定义我们的Reducer：</p>
                <ul>
                    <li><p>Reducer 就是一个纯函数，确定好了我们的Action 格式之后，接收我们的action，从而返回新的state.</p></li>
                    <li><p>需要注意的点，Reducer 函数一定要保证清洁，这是Reducer 编写的规范！意指，在Reducer 函数中，不应有任何存在的API 请求、没有变量的修改、没有什么特殊情况的存在等。</p></li>
                </ul>
                <pre>
                <code>{`
                import {
                    USER_ID
                } from './action'

                export const TO_USER_ID = (text) => USER_ID(text);
                `}</code>
                </pre>

                <SubHeader title='拆分 Reducer'/>
                    
            </div>
        )
    }
}

export default hot(module)(View4)