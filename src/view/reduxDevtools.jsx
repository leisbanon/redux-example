import React from 'react'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'

class Views extends React.Component {
    constructor(props) {
        super(props);
        this.devtools_0 = require('@/image/redux-devtools-0.png');
        this.devtools_1 = require('@/image/redux-devtools-1.png');
    }
    render() {
        return(
            <div>
                <SubHeader title='reduxDevtools'/>
                <p className='indent'>redux-debtool：针对Redux浏览器可视化状态管理。当我们开发Redex 时，怎么样更好的查看我们的Store State呢？ 如果console.log() 打印的话那么太麻烦了，在中大型项目中安装redux-devtoole 浏览器插件必不可少！它可以让我们在更直观的看到我们Store 中的State 树。 实际上也是一个浏览器插件，时刻监听Redux Store. 效果图如下：</p>
                <div style={{'display':'flex','overflow':'auto'}}>
                    <img style={{'marginRight':'30px'}} src={this.devtools_0} alt=""/><br/>
                    <img src={this.devtools_1} alt=""/>
                </div>
                
                <br/><br/>
                <strong>使用方法：</strong>
                <div className='indent'>1、首先我们需要从Chrome 插件市场下载redux-devtools 工具。网上很多的下载渠道，你也可以从这里下载：<a href="https://download.csdn.net/download/china_guanq/10669799" target='__black'>下载地址</a>。下载完成之后将.crx 添加到Chrome 扩展程序中。</div>

                <p className='indent'>2、然后我们还需要在Redux项目中安装 redux-devtools-extension。这是一个在Redux 扩展浏览器对Store 监听助手，这是必须要安装的工具：</p>
                <pre>
                    <div>npm i redux-devtools-extension --save-dev</div>
                </pre>

                <p className='indent'>3、创建createStore 时引用 redux-devtools-extension. </p>
                <pre>
                <code>{`
                `}
                <span className='color-green'>// composeWithDevTools</span>
                {`
                import { composeWithDevTools } from 'redux-devtools-extension'

                const store = createStore(
                    reducer,
                    composeWithDevTools(),
                    applyMiddleware(
                        loggerMiddleware,
                        thunkMiddleware
                    ),
                );
                `}</code>
                </pre>

                <strong>现在我们重新刷新浏览器，并打开Chrome 控制 切换到Redux 选项卡就能看到我们Redux Store 了。</strong>
            </div>
        )
    }
}

export default hot(module)(Views)