import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' 
import { hot } from 'react-hot-loader'
import { SubHeader } from '@/components'
import '@/style/view5.css'
import {
    bookName
} from '@/store/action'

/**
 * 基于react-redux 的一书籍管理的示例Dome
 * 字段：{
 *  2、bookName：书籍名称
 * }
 */
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName:'',
        }
    }
    addBook() {
        let bookname = this.state.bookName;
        if(bookname.trim()) {
            this.props.dispatch(bookName(bookname));
            this.setState({
                bookName:'',
            });
        }
    }
    bookNameChange(event) {
        this.setState({
            bookName:event.target.value
        });
    }
    render() {
        return(
            <div>
                <p>
                    <input value={this.state.bookName} onChange={this.bookNameChange.bind(this)} type="text" placeholder='请输入书籍名称'/>&emsp;
                    <button onClick={this.addBook.bind(this)}>添加</button>
                </p>

                <ul>
                    <li>Number</li>
                    <li>书籍名称</li>
                </ul>
                {
                    this.props.dataList.map((value,index) => {
                        return(
                            <ul key={index}>
                                <li>{index + 1}</li>
                                <li>{value}</li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}
Content.propTypes = {
    dataList: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
    return {
        dataList:state.toBook
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addBook:text => {
            dispatch(bookName(text));
        }
    }
}

const Connects = connect(
    mapStateToProps
)(Content);

class View5 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
                <SubHeader title='在React 中使用Redux => react-redux'/>
                <Connects/>
            </div>
        );
    }
}
 
export default hot(module)(View5)

