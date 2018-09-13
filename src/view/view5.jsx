import React from 'react'
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'


/**
 * 基于react-redux 的一书籍管理的示例Dome
 * 字段：{
 *  1、bookId：书籍ID
 *  2、bookName：书籍名称
 *  3、bokPrice：书籍价格
 *  4、bookAuthor：书籍出版作者
 * }
 */
const Content = () => {
    
}

class View5 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
                <SubHeader title='在React 中使用Redux => react-redux'/>
            </div>
        );
    }
}
 
export default hot(module)(View5)

