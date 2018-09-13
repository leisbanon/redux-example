import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../dome/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => {
  return(
    <div>
      {/* 表单的操作以及按钮组件 */}
      <AddTodo />

      {/* 列表的显示组件 */}
      <VisibleTodoList />

      {/* 组件状态规则显示 */}
      <Footer />


    </div>
  )
}

class toApp extends React.Component {
  constructor(props,context) {
    super(props,context);
    console.log(context);
  }
  componentDidMount() {
    // const { store } = this.context;
    // console.log(store.getState());
  }
  render() { 
    return(
      <App />
    )
  }
}
 
export default toApp;
