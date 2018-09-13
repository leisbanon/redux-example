import React from 'react'
import {Link} from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'


import {
    user,
    hotel,
    userId,
} from '@/store/action'

class View5 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <SubHeader title='使用进阶 => Store'/>
                <p>通过前面的介绍，Action 来描述将要发生的事件，而Reducer 是根据Action 来处理并更新State. 最终Store 就是将Action、Reducer 联系起来，一个Redux Store 就完成了。Store 理解成一个仓库，即一个仓库中包含着所有我们需要的状态！</p>
                <p>Store 有以下API，帮助我们如何去使用Store 对象：</p>
                <ol className='color-green  '>
                    <li><p>getState() => Store 提供getState() 方法获取我们State 状态</p></li>
                    <li><p>dispatch(action) => 使用dispatch 方法触发并更新我们的State</p></li>
                    <li><p>subscribe(listenter) => 该函数可以监听我们的State 变化，一旦state is update，那么将触发该监听函数。通常在该监听回调中，我们通过getState() 获取最新的状态并重新更新组件State，setState({`{...}`})</p></li>
                </ol>
                <strong>需要强调的是，在Redux 应用中应当只有一个Store 对象。多个Reducer 处理逻辑时，使用 <span className='color-red'>combineReducer()</span> 将多个reducer 合并成一个.上一章节已经讲到，<span><Link to='view3'>转到第四章节</Link></span></strong>
                <pre>
                    <code>{`
                    import {createStore} from 'redux'
                    import reducer from './reducers'

                    const store = createStore(
                        reducer
                    );
                    `}</code>
                </pre>

                <p><button onClick={this.toDispatch.bind(this)}>Store Dispatch userId</button></p>
                <p><button onClick={this.toDispatch_1.bind(this)}>Store Dispatch useName</button></p>
                <p><button onClick={this.toDispatch_2.bind(this)}>Store Dispatch roomId</button></p>
            </div>
        )
    }
    toDispatch() {
        //注册监听State.
        const unsubscribe = store.subscribe(() => {
            let state = store.getState();
            alert('当前应用State：'+JSON.stringify(state));
        });

        store.dispatch(userId('431103'));

        //销毁监听
        unsubscribe();
    }
    toDispatch_1() {
        //注册监听State.
        const unsubscribe = store.subscribe(() => {
            let state = store.getState();
            alert('当前应用State：'+JSON.stringify(state));
        });

        store.dispatch({
            type:user.userName,
            text:'GuanQun',
        });

        //销毁监听
        unsubscribe();
    }
    toDispatch_2() {
        //注册监听State.
        const unsubscribe = store.subscribe(() => {
            let state = store.getState();
            alert('当前应用State：'+JSON.stringify(state));
        });

        store.dispatch({
            type:hotel.roomId,
            text:'520123',
        });

        //销毁监听
        unsubscribe();
    }
}

export default hot(module)(View5)