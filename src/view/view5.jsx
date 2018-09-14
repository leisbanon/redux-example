import React from 'react'
import { connect } from 'react-redux' 
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'
import '@/style/view5.css'
import {
    addBookAction,
    deleteBookAction
} from '@/store/action'


/**
 * 基于react-redux 的一书籍管理的示例Dome
 * 字段：{
 *  2、bookName：书籍名称
 * }
 */
const Content = ({dataList,addBook,deleteBook}) => {
    let onAdd = () => {
        let bookname = document.getElementById('inputs').value;
        if(bookname) {
            addBook(bookname);
        }
    }
    
    let onDelete = (value) => {
        deleteBook(value);
    }
    return(
        <div id='view5'>
            <p>
                <input id='inputs' type="text" placeholder='请输入书籍名称'/>&emsp;
                <button onClick={() => onAdd()}>添加</button>
            </p>

            <ul>
                <li>Number</li>
                <li>书籍名称</li>
                <li>操作</li>
            </ul>
            {
                dataList.map((value,index) => {
                    return(
                        <ul key={index}>
                            <li>{index + 1}</li>
                            <li>{value}</li>
                            <li className='delete' onClick={() => onDelete(value)}>删除</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    return {
        dataList:state.toBook
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return{
        addBook:bookname => {
            dispatch(addBookAction(bookname));
        },
        deleteBook:bookname => {
            dispatch(deleteBookAction(bookname))
        }
    }
}

const Connects = connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);

class View5 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
                <SubHeader title='在React 中使用Redux => react-redux'/>
                <p className='indent'>需要指明的是，Redux 和React 之间并没有任何关系。Redux 是独立于自身得到框架，它可以在任何项目给中做为应用状态管理的手段。在我们的React 项目中选用Redux 可能是很好的选择，但是我们在React 项目中使用Redux ，那么就有必要学习 react-redux 的使用。这个库是React 官方提供的库，它能让我们以更好的方式去监听Redux Store 状态的变化，从而触发我们组件的更新。</p>
                <Connects />

                <p><strong>react-redux 是什么？首先需要了解如下这两个概念：</strong></p>
                <ol>
                    <li><p><span className='color-red'>展示组件 => </span>展示组件就是我们React 定义的常规组件。它可以定义成函数式无状态组件。或者定义成状态组件，状态组件拥有component state 以及组件的生命周期函数等。</p></li>
                    <li><p><span className='color-red'>容器组件 => </span>容器组件就是我们即将使用react-redux 定义的组件。最终我们使用react-redux 是用来创建一个容器组件。该组件可以从 Redux Store树中读取State 数据，并通过Props 把这些数据传递给我们的要渲染的组件。创建容器组件的使用react-redux 提供的connect() 方法。当然具体使用请看下面API 的介绍。</p></li>
                </ol>

                <p><strong>使用react-redux 开发我们的容器组件：</strong></p>
                <ol>
                    <li>
                        <p className='color-red'>{`根组件嵌套<Provider /> 并传递我们的Redux Store，这是必须的！该行为能够使我们在任何下层组件中都能够拿到Store 对象。`}</p>
                        
                        <strong>index.js：</strong>
                        <pre>
                        <code>{`
                        import React from 'react';
                        import ReactDOM from 'react-dom';
                        import App from './App.jsx';

                        `}
                        <span className='color-green'>// 1、引入Provider</span>
                        {`
                        import { Provider } from 'react-redux'
                        import store from '@/store/store'

                        ReactDOM.render(
                            `}
                            <span className='color-green' style={{'whiteSpace':'normal'}}>// 2、根组件使用Provider 标签包裹。那么我们下层组件可以通过react context 属性获取到传递的store 对象</span>
                            {`
                            <Provider store={store}>
                                <App />
                            </Provider>,
                            document.getElementById('root'),
                        );
                        `}</code>
                        </pre>
                    </li>

                    <li>
                        <p className='color-red'>{`react-redux connect() 方法创建我们的容器组件。方法接收两个参数，第一个mapStateTopProps，第二个是mapDispatchProps。`}</p>
                        <ul>
                            <li>
                                <p>mapStateTopProps(state,ownProps)：该函数接收两个参数，第一个是state：返回我们的Store State。第二个参数是newProps：接收传递到组件的Props.</p>
                                <p>该函数核心在于，如果定了该参数，那么组件将会监听Redux Store的变化。只有Redux Store发生变化，那么mapStateToProps函数就会调用，从而触发我们的组件更新。如果我们不定义mapDispatchProps 那么你的组件将不会监听Redux Store。</p>
                                <pre>
                                <code>{`
                                `}
                                <span className='color-green' style={{'whiteSpace':'normal'}}>// 3、定义mapStateToProps，第一个参数state 接收我们的Redux Store. 第二个参数ownProps 接收组件传递的Props。需要注意的是，该函数必须返回一个纯对象，这个对象将会与展示组件Props 合并!</span>
                                {`
                                const mapStateToProps = (state,ownProps) => {
                                    return {
                                        dataList:state.toBook
                                    }
                                }
                                `}</code>
                                </pre>
                            </li>
                            <li>
                                <p>mapDispatchToProps(dispatch,ownProps)：该函数用于建立我们如何发起状态变更的操作，通过第一个参数发起对Store State的变更。它接收两个参数，第一个是dispatch：调用该方法发起对状态的变更。第二个参数ownProps 接收组件传递的Props</p>
                                <pre>
                                <code>{`
                                `}
                                <span className='color-green' style={{'whiteSpace':'normal'}}>//4、定义mapDispatchToProps。如下mapDispatchToProps 定义我一个函数，那么会得到dispatch 和 ownProps. 需要注意的是，该函应当返回一个对象，对象的每一个都是一个映射并合并到展示组件的Props 中.</span>
                                {`
                                const mapDispatchToProps = (dispatch,ownProps) => {
                                    return{
                                        addBook:bookname => {
                                            dispatch(addBookAction(bookname));
                                        },
                                        deleteBook:bookname => {
                                            dispatch(deleteBookAction(bookname))
                                        }
                                    }
                                }
                                `}</code>
                                </pre>
                            </li>
                        </ul>

                        <p className='color-red'>使用connect() 创建容器组件：通过上面对connect() api 的介绍，该行为意指让React 组件能够发起对Redux Store State 的更新 并监听Store 从而出发组件的更新。</p>
                        <pre>
                        <code>{`
                        import { connect } from 'react-redux' 
                        `}
                        <span className='color-green' style={{'whiteSpace':'normal'}}>//6、 展示组件的逻辑。Props 接受来自mapStateToProps 和 mapDispatchToProps 返回的对象。</span>
                        {`
                        const Content = ({dataList,addBook,deleteBook}) => {
                            let onAdd = () => {
                                let bookname = document.getElementById('inputs').value;
                                if(bookname) {
                                    addBook(bookname);
                                }
                            }
                            
                            let onDelete = (value) => {
                                deleteBook(value);
                            }
                            return(
                                <div id='view5'>
                                    <p>
                                        <input id='inputs' type="text" placeholder='请输入书籍名称'/>&emsp;
                                        <button onClick={() => onAdd()}>添加</button>
                                    </p>
                        
                                    <ul>
                                        <li>Number</li>
                                        <li>书籍名称</li>
                                        <li>操作</li>
                                    </ul>
                                    {
                                        dataList.map((value,index) => {
                                            return(
                                                <ul key={index}>
                                                    <li>{index + 1}</li>
                                                    <li>{value}</li>
                                                    <li className='delete' onClick={() => onDelete(value)}>删除</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }

                                                `}
                        <span className='color-green' style={{'whiteSpace':'normal'}}>// 5、这为我们创建一个函数组件. Content 展示组件的Props将合并接受到的mapStateToProps 以及 mapDispatchToProps 返回的对象. </span>
                        {`
                        const Connects = connect(
                            mapStateToProps,
                            mapDispatchToProps
                        )(Content)
                        `}</code>
                        </pre>
                    </li>

                    <li><p className='color-red'>展示容器组件</p></li>
                    <pre>
                    <code>{`
                    class View5 extends React.Component {
                        render(
                            <div>
                                `}
                                <span className='color-green' style={{'whiteSpace':'normal'}}>{`// 这里如果容器组件传递Props ,如果<Connects title='Hello React-Redux'/> ,那么ownProps 将会接收到该{title:'Hello React-Redux'} `}</span>
                                {`
                                <Connects />
                            </div>
                        )
                    }

                    `}</code>
                    </pre>
                </ol>
            </div>
        )
    }
}

export default hot(module)(View5)

