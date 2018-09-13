import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'

let AddTodo = ({dispatch}) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          placeholder='请输入'
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// 这里使用connect() 方法返回一个容器组件。
AddTodo = connect()(AddTodo)

export default AddTodo