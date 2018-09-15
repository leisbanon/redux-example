import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'

import {fetchUserName} from '@/store/action'

class View6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store:'',
        }
    }
    fetchUserName() {
        let username = '张三李四王麻子';
        this.props.dispatch(fetchUserName(username)).then(() => {
            this.setState({
                store:this.context.store.getState()
            });
        })
    }
    componentDidMount() {
        this.setState({
            store:this.context.store.getState()
        })
    }
    render() {
        return(
            <div>
                <SubHeader title='异步 Action'/>
                <p><strong>当前应用Store State Data:</strong></p>
                <p>{JSON.stringify(this.state.store)}</p>

                <p><button onClick={this.fetchUserName.bind(this)}>发起异步Action 处理 => add redux store state username</button></p>

                <p className='indent'>在基础的实例教程中说明了我们的如果创建action 函数，如果你对 Action 的概览还不过清晰，那么推荐还是先看前面的介绍和使用。但是该函数是同步的。在某一些情况下，我们的构建函数可能是需要通过网络请求获取数据，并确定我们的构建函数的格式，比如需要从接口请求中获取我们的用户姓名，这就需要一个异步的处理的过程。</p>
                <p className='indent'>本章节描述我们如果构建我们的异步Action 函数，即异步Action，这是高级进阶部分的内容。当然这不是一定需要做的，因此我们可以将异步请求的过程在我们的component 中，然后调用我们的Action 构建函数并传入需要的数据。但是使用异步的处理函数会时很好的选择，这让代码更加清晰，以及保持良好的代码整洁度。我们在可以Action中就发起 dispatch 。这需要我们安装 redux-thunk. </p>

                <pre>
                    {``}
                    <span className='color-green'>1、构建我们的异步 Action 函数，这里我们使用redux-thunk，或者也有其他处理异步Action 的方式。当然我们还是推荐使用它，它是React 官网提供的一些中间件。首先我们需要安装它：</span>
                    {`

                    npm i redux-thunk --save-dev
                    `}
                </pre>

                <strong>store.js：</strong>
                <pre>
                    <div className='color-green'>2、在构建我们Store 仓库是加载我们的中间件程序：redux-thunk：</div>
                    <code>{`
                    import {createStore,applyMiddleware} from 'redux'
                    import reducer from './reducers'

                    import thunkMiddleware from 'redux-thunk'

                    const store = createStore(
                        reducer,
                        applyMiddleware(
                            `}
                            <span className='color-green'>// 引入redux-thunk middleware，允许我们异步处理Action。</span>
                            {`
                            thunkMiddleware
                        ),
                    );
                    `}</code>
                </pre>

                <strong>action.js：</strong>
                <pre>
                    <div className='color-green'>3、构建我们的异步Action 处理函数fetchUserName。</div>
                    <code>{`
                    `}
                    <span className='color-green'>// 创建Action 函数 => 用户姓名</span>
                    {`
                    export const userName = (text) => {
                        return {
                            type:user.userName,
                            text
                        }
                    }

                    `}
                    <span className='color-green' style={{'whiteSpace':'normal'}}>// 定义异步Action 处理函数 => 更新用户名。安装了redux-thunk 中间件，那么在创建Action  函数时，它允许我们调用一个dispatch()函数，从而在Action 中就可触发diapatch. </span>
                    {`
                    export const fetchUserName = () => {
                        return dispatch => {
                            `}
                            <span className='color-green'>// Promise 模拟异步网络请求的处理</span>
                            {`
                            return new Promise((resolve,reject) => {
                                setTimeout(() => {
                                    let username = '张三李四王麻子';
                                    resolve(username);
                                }, 1000);
                            }).then(v => {
                                dispatch(userName(v));
                            })
                        }
                    }
                    `}</code>
                </pre>
                
                <pre>
                    <div className='color-green'>4、现在我们可以调用创建的异步Action 处理函数。通过如下代码，thunk 的一个优点就是可以再一次被dispatch</div>
                    <code>{`
                    import {fetchUserName} from '@/store/action'

                    fetchUserName() {
                        this.props.dispatch(fetchUserName()).then(() => {
                            // dispatch 回调
                        })
                    }
                    `}</code>
                </pre>
            </div>
        )
    }
}

View6.contextTypes = {
    store:PropTypes.object
}

export default hot(module)(connect()(View6));