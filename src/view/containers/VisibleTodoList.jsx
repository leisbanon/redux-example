import { connect } from 'react-redux'
import { toggleTodo } from './actions'
import TodoList from '../components/TodoList'

// Reducer
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

// mapStateToProps => 指定如何把当前的Redux Store State 映射到指定的展示组件中
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

// mapDispatchToProps => 该方法可以接收一个dispatch(),因此该方法可以执行dispatch 返回到展示组件中的props 的回调方法。
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

// connect(). 理所当然connect() 就是包裹展示组件，从而返回一个容器组件的加载器。方法接收两个参数，mapStateToProps 函数 以及 mapDispatchToProps 函数
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList