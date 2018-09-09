import React from 'react'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'

class View2 extends React.Component {
    render() {
        return(
            <div>
                <SubHeader title='Redux 开始。基础示例-源码'/>
                <p className='indent'>直接查看有效的代码便更加客观的帮助我们理解和使用，实际在中应用Redux 并不难。其次在对与其概念性的学习，了解Redux 内部是如何运作的，明白之后使用Redux 便轻车上路了,当然这里只是一个简单的示例：</p>
                <pre>
                <code>{`
            import React from 'react'
            import {createStore } from 'redux'

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
                        <button onClick={this.setStore.bind(this)}>Store Dispatch</button>
                    )
                }
                setStore() {
                    // 监听Store State 的变化，并设置到component state
                    store.subscribe(v => { 
                        this.setState({
                            userId:store.getState()
                        })
                    });
                    //提交状态变更
                    store.dispatch({
                        type:'USER_ID',
                        text:'431103',
                    });
                }
            }
                `}</code>
                </pre>
            </div>
        )
    }
}

export default hot(module)(View2)