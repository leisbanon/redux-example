import React from 'react'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'

import {createStore} from 'redux'


// 声明Action 常量
const userId = 'USER_ID';
const userName = 'USER_NAME';

// 定义Reducer
const user = (state = {},action) => {
    switch(action.type) {
        case userId:
            return Object.assign(state,{
                'userId':action.text
            });
        case userName:
            return Object.assign(state,{
                userName:action.text
            });
        default:
            return state;
    }
}

const store = createStore(user);

class View2 extends React.Component {
    constructor(props) {
        super(props);
    }
    toDispatch_0() {
        alert('状态更新之前：' + JSON.stringify(store.getState()));

        // 监听Store State 更新
        const unsubscrive = store.subscribe(() => {
            alert('状态更新之后：' + JSON.stringify(store.getState()));
        });

        //发起
        store.dispatch({
            type:userId,
            text:'431103',
        });

        //销毁监听
        unsubscrive();
    }
    render() {
        return(
            <div>
                <SubHeader title='Redux 开始。基础示例-源码'/>
                <p className='indent'>直接查看下面代码实例，基本的Redux Store 的构建就完成了。查看我们如果创建Store 并发起状态变更请求。</p>
                <ol>
                    <li>
                        <div className='color-red indent'>引入 Redux createStore 创建对象：</div>
                        <div className='indent'>首先 import 导入Redux 的支持，redux 对外开发导出了一个方法createStore， 该方法我们创建Store 对象。</div>
                        <div className='indent'>createStore 函数方法接收一个Reducer。简单的理解 createStore 是接受一个Reducer 对象来作为创建Redux Store 的条件</div><br/>
                    </li>

                    <li>
                        <div className='color-red indent'>声明Action 常量：</div>
                        <div className='indent'>声明Action 常量，这是必须的。该常量表示即将有状态变更的事情发生，但是要知道的是，Action 只是标识有状态事件的发生，如何响应State 变更时由Reducer 来管理。</div><br/>
                    </li>

                    <li>
                        <div className='color-red indent'>编写我们的Reducer：</div>
                        <div className='indent'>然后就是编写我们的Reducer ,它是描述如何响应State 并返回我们的State. 它接收两个参数，第一个是参数返回旧的State，第二个参数返回我们传入的Action。 </div>
                        <div className='indent'>这里需要注意到是，通常我们编写一个Reducer 初始化state 是为空的，因此我们为它默认赋值一个空对象：{`const user = (state = {},action)`}。下一次状态更新时，使用Object.assign() 方法 Copy 我们的State。</div><br/>
                    </li>

                    <li>
                        <div className='color-red indent'>创建我们的Store 状态管理对象：</div>
                        <div className='indent'>Reducer 函数编写好了，现在就可以初始化创建我们的Store 了：</div>
                        <div className='indent'>{`const store = createStore(user);`}。需要强调的是，Redux 应用只有一个单一的Store.当需要拆分数据处理逻辑时，我们需要使用 Reducer 组合，而不是创建多个Store ！</div><br/>
                    </li>

                    <li>
                        <div className='color-red indent'>Store Dispatch：</div>
                        <div className='indent'>最后我们的Redux Store 就已经创建好了。发起Store State 的更新，唯一的方法就是触发store dispatch 方法。该方法接收一个Action 对象。</div>
                        <div>要求：action 内必须使用一个字符串类型 type 字段表示将要执行的动作！</div><br/>
                    </li>

                    <li>
                        <div className='color-red indent'>监听状态变更 以及 销毁监听：</div>
                        <div>每次发起Dispatch 我们需要做的是监听状态的变更，以便回调之后对组件状态的变更。销毁监听也是需要执行的步骤：</div>
                    </li>
                </ol>
                
                <p><button onClick={this.toDispatch_0.bind(this)}>发起 Store Dispatch</button></p>

                <pre>
                <code>
                {`
                `}
                <span className='color-green'>//1、引入Redux createStore</span>
                {`
                import React from 'react'
                import {createStore } from 'redux'

                `}

                <span className='color-green'>// 2、声明Action 常量</span>
                {`
                const userId = 'USER_ID';
                const userName = 'USER_NAME';

                `}

                <span className='color-green'>//3、定义Reducer</span>
                {`
                const user = (state = {},action) => {
                    switch(action.type) {
                        case userId:
                            return Object.assign(state,{
                                'userId':action.text
                            });
                        case userName:
                            return Object.assign(state,{
                                userName:action.text
                            });
                        default:
                            return state;
                    }
                }

                `}

                <span className='color-green'>//4、创建Redux Store</span>
                {`
                const store = createStore(user);
                `}

                {`
                class View2 extends React.Component {
                    constructor(props) {
                        super(props);
                    }
                    render() {
                        return(
                            <button onClick={this.toDispatch_0.bind(this)}>发起 Store Dispatch</button>
                        )
                    }
                    toDispatch_0() {
                        alert('状态更新之前：' + JSON.stringify(store.getState()));

                        `}
                        <span className='color-green'>//监听Store State 更新</span>
                        {`
                        const unsubscrive = store.subscribe(() => {
                            alert('状态更新之后：' + JSON.stringify(store.getState()));
                        });

                        `}
                
                        <span className='color-green'>//5、发起状态变更</span>
                        {`
                        store.dispatch({
                            type:userId,
                            text:'431103',
                        });

                        `}
                
                        <span className='color-green'>//销毁监听</span>
                        {`
                        unsubscrive();
                    }
                }
                `}

                </code>
                </pre>
            </div>
        )
    }
}

export default hot(module)(View2)