import React from 'react'
import { hot } from 'react-hot-loader'
import {createStore } from 'redux'
import { SubHeader } from '@/components'


// 这里设置sate 的默认值为0
const user = (state = 0,action) => {
    console.log(action);
    switch(action.type) {
        case 'USER_ID':
            return action.text;
        default:
            return state;
    }
}

// 创建Redux Store
let store = createStore(user);

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:store.getState()
        }
    }
    render() {
        return(
            <div>
                <SubHeader title='Redux 开始,基础示例'/>
                <p>Store State uer_id：{this.state.userId}</p>
                <p><button onClick={this.setStore.bind(this)}>{`store.dispatch({type:'  USER_ID',text:'431103'});`}</button></p>

                    <div>一个简单的Redux Store 的示例，帮助我们开始如何使用它：</div><br/>
                    <div className='color-green'>// 首先引入Redux 模块,createStore 关键方法，表示该创建一个Redux Store 来存放我们的State 状态</div>
                    <pre><div>{`import {createStore } from 'redux'`}</div></pre>
                    <div className='indent'>createStore 参数接收一个reducer，该对象是一个函数。简单的理解 createStore 是接受一个函数来作为创建Redux Store State 的条件，那么该函数方法接收两个参数，第一个是State,第二个就是Action ，action可以是任何对象传输过去，当然更多时候是一个Object 或者是一个 Aarray 。我们是根据该数据 来判断是否更新State 或者如何更新State 的操作！</div>
                    <p>下面我们创建一个Reduce bookid：</p>
                    <pre>
                    <code>{`
                    // 这里设置sate 的默认值为0
                    const user = (state = 0,action) => {
                        switch(action.type) {
                            case 'USER_ID':
                                return action.text;
                            default:
                                return state;
                        }
                    }
                    `}</code>
                    </pre>
                    <p className='color-green indent'>reducer 函数创建好了，知道createStore 接收一个reducer 对象做为创建Redux Store 的驱动，现在我们初始化创建我们的的Store 对象:</p>
                    <pre>
                        <div className='color-green indent'>这样就为我们创建完成了一个Redux Store 仓库。需要强调，Redux 应用只有一个单一的Store.当需要拆分数据处理逻辑时，我们需要使用 reducer 组合，而不是创建多个Store ！后面会讲到</div>
                        <p>{`let store = createStore(user);`}</p>
                    </pre>
                    <p className='indent color-green'>一个基本的Redux Store 就创建完成了。现在我们需要做的就是如何管理我们的State,以及需要更新State 从而触发页面的更新。</p>
                    <pre>
                        <div>// 更新Store State 唯一的方法就是触发store dispatch 方法。接收一个Action 对象</div>
                        <div>{`store.dispatch({type:'  USER_ID',text:'431103'});`}</div>
                    </pre>
                    <p className='indent'>使用subscribe，监听Store State 状态的改变。状态改变时会触发该函数，这时我们在获取Store State ，将该值应该到组件中state 中，从而重新组件页面的更新。 需要注意：定义subscrib 监听，一定是在dispatch 发起之前声明。</p>
                    <pre>
                    <code>
                        {`
                        store.subscribe(v => { 
                            this.setState({
                                userId:store.getState()
                            })
                        });
                
                        store.dispatch({
                            type:'USER_ID',
                            text:'431103',
                        });
                        `}
                    </code>
                    </pre>
            </div>  
        )
    }
    setStore() {
        store.subscribe(v => { 
            console.log(store.getState());
            this.setState({
                userId:store.getState()
            })
        });

        store.dispatch({
            type:'USER_ID',
            text:'431103',
        });
    }
}

export default hot(module)(Content)