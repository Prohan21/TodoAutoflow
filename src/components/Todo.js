import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import axios from 'axios'
import {IoIosCloseCircleOutline} from 'react-icons/io'
function Todo({todos,completeTodo,removeTodo}) {
    const[edit,setEdit]=useState({
        id:null,
        value:''

    })

  return todos.map((todo,index)=>(
      <div className={todo.isComplete ? 'todo-row complete':
      'todo-row'} key = {index}>
          <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
              {todo.content}

          </div>
          <div>
              <IoIosCloseCircleOutline
              onClick={()=> removeTodo(todo.id)}
              className='delete-icon'
              />
          </div>

      </div>
  ))
}

export default Todo