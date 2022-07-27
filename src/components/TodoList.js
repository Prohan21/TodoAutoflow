import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'   
import axios from 'axios'
function TodoList() {
    const [todos,setTodos] = useState([])
    
    useEffect(()=>{
        try {
            axios.get("http://localhost:3001/")
            .then((result)=>{console.log(result.data);
                setTodos(result.data)
                // setTodos([{id: 123, content: 'Test1'},{id: 1234, content: 'Test2'}])
                console.log(todos)
            })
        } catch (e) {
            // console.log(e)
        }
        
    },[])

    const addTodo = todo => {
        if(!todo.content || /^\s*$/.test(todo.content)){
            return
        }
        const neTodos = [todo, ...todos]    
        setTodos(neTodos)
//         axios.interceptors.request.use((request) => {
//   console.log("Starting Request", JSON.stringify(request, null, 2));
//   return request;
// });
        axios.post('http://localhost:3001/',{'idp':todo.id, 'content': todo.content}).then((result)=>{console.log(result)})
        
        console.log(todos)
    }
    const removeTodo=id =>{
        const removeArr =[...todos].filter(todo=> todo.id !== id)
        axios.delete('http://localhost:3001/',{data: {'idD':id}})
        console.log("idD"+id)
        setTodos(removeArr)

    }
    const completeTodo =id=>{
        // let updatedTodos = todos.map(todo=>{
        //     if (todo.id ===id) {
        //         todo.isComplete = !todo.isComplete;

                
        //     }
        //     return todo
        // })      
    }

  return (
    <div>
        <h1>ToDo List</h1>
        <TodoForm onSubmit ={addTodo}></TodoForm>
        <Todo
        todos={todos} completeTodo={completeTodo}
        removeTodo={removeTodo}
        ></Todo> 
    </div>
  )
}

export default TodoList