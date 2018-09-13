import React from 'react'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'

import store from '@/store/store'

class View4 extends React.Component {
    constructor(props) {
        super(props);
    }
    seeStore() {
        alert(JSON.stringify(store.getState()));
    }
    render() {
        return(
            <div>
                <SubHeader title='设计我们的State 结构'/>
                <p className='indent'>在Redux 应用中，所有的状态即State 都被保存在一个单一的对象中。因此在我们编写Reducer 时，先想好自己需要什么的格式来保存我们应用中状态。这种格式是自定义的，所有如果你比较任性，可大胆的去设计我们的State 格式。</p>
                <p className='indent'>当然一般情况下，我们可以是Array 或者是一个 Object。 使用Object 对象保存我们所有的状态这样是推荐的形式！</p>
                <p><button onClick={this.seeStore.bind(this)}>查看当前应用中的Store State</button></p>


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
                            user,
                        } from './action'

                        `}
                        <span className='color-green' style={{'whiteSpace':'normal'}}>// 创建我们的Reducer，为了代码的简洁，这里使用if 判断并并返回我们的State. 当然如果你有好的方式让代码看上去更加整洁可观，你也可以使用其他方法，毕竟这在语法上的可自定义性还是比较随大众喜好。</span>
                        {`
                        const toUser = (state={},action) => {
                            // Action user.userId
                            if(action.type == user.userId) {
                                return Object.assign(state,{
                                  'userID':action.text
                                });
                            }
                          
                            // Action user.userId
                            if(action.type == user.userName) {
                              return Object.assign(state,{
                                'userName':action.text
                              });
                            }
                          
                            return state;
                          }
                    `}</code>
                </pre>

                <div id='combineReducers'></div>
                <SubHeader title='拆分 Reducer => combineReducers 函数'/>
                <p className='indent'>拆分Reducer 是Redux中最基本的应用模式。随着应用的越来越大，我们要必要将Reducer 拆分成多个单独函数，拆分后的每一个函数独负责自己的那块State 部分。即使代码层次清晰，也便于状态的管理和维护。</p>
                <p className='indent color-green'>combineReducers 是一个辅助函数。它的作用就是将多个Reducer 函数合并成一个Reducer。然后最终将这个Reducer 传递给createStore() 方法。</p>
                <p>举例使用实例使用的两个Reducer 函数，user 以及 hoto，如下示例我们如何将user 以及 hotel 两个Reducer 函数合并成一个Reducer，实际也非常的简单，记住就好了：</p>
                <pre>
                    <code>{`
                    `}
                    <span className='color-green'>// 引入 combineReducers 辅助函数</span>
                    {`
                    import { combineReducers } from 'redux'
                    import {
                        user,
                        hotel,
                      } from './action'

                      `}
                      <span className='color-green'>// 用户Reducer</span>
                      {`
                      const toUser = (state={},action) => {
                        if(action.type == user.userId) {
                            return Object.assign(state,{
                              'userID':action.text
                            });
                        }
                        return state;
                      }

                      `}
                      <span className='color-green'>// 酒店Reducer</span>
                      {`
                      const toHotel = (state={},action) => {
                        if(action.type == hotel.roomId) {
                          return Object.assign(state,{
                            'roomId':action.text
                          });
                        }
                        return state;
                      }

                      `}
                      <span className='color-green'>// combineReducers 合并Reducer</span>
                      {`
                      const reducer = combineReducers({
                        toUser,
                        toHotel,
                      });

                      `}
                      <span className='color-green'>// 在这里，我们导出reducers， 并在store.js 文件导入获取该 最终达到reducer 对象</span>
                      {`

                      export default reducer;
                    `}</code>
                </pre>

            </div>
        )
    }
}

export default hot(module)(View4)