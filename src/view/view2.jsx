import React from 'react'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'

class View3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <SubHeader title='使用进阶 => Action'/>
                <p>定义Action：</p>
                <ul>
                    <li>
                        <p>Action 内必须使用一个type 字符串的类型来表示即将发生的动作。</p>
                    </li>
                    <li>
                        <p>一般我们将 type 定义一个字符串常量，知道常量我们都是定义它都是大写的字母，这是规范。</p>
                    </li>
                    <li>
                        <p>如果当我们的应用越来越大，所定义的Action 越来越多，这是我们可以建立一个单独的js 文来保存我们的Action，这样就让我们的代码更加简洁了，也便于阅读。当然如果我们的应用涉及的状态管理的组件不多，这种操作完全不必要。</p>
                        <ul>
                            <li>{`import { USER_ID } from '../actionTypes'`}</li>
                        </ul>
                    </li>
                </ul>
                <pre>
                    <code>{`
                        `}
                        <span className='color-green'>//用户常量</span>
                        {`
                        const user = {
                            userId:'USER_ID',
                            userName:'USER_NAME',
                        }

                        `}
                        <span className='color-green'>//Action 基本定义格式，type 是必须的，text 作为State 更新的值</span>
                        {`
                        let actions = {
                            type:user.userId,
                            text:'431103'
                        }
                    `}</code>
                </pre>

                <SubHeader title='创建我们Action 函数' />
                <p className='indent'>创建我们的Action 函数，然后返回我们的Action. 这样做的好处就是，我们可以直接调用函数来生成我们的action,而不是每一次都手动去变编写生成。</p>
                <p className='indent'>如下所示，我们发起状态变更时，只需要： store.dispatch(userId(params));</p>
                <pre>
                    <code>{`
                    `}
                    <span className='color-green'>//用户常量</span>
                    {`
                    const user = {
                        userId:'USER_ID',
                        userName:'USER_NAME',
                    }

                    `}
                    <span className='color-green'>创建Action 函数</span>
                    {`
                    export const userId = (text) => {
                        return {
                            type:user.userId,
                            text
                        }
                     }
                    `}</code>
                </pre>
            </div>
        )
    }
}

export default hot(module)(View3)