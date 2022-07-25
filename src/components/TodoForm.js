import axios from 'axios';
import React, { useState,useEffect } from 'react'

function TodoForm(props) {
    const [input, setInput]=useState('')
    const handleChange = x => {
        setInput(x.target.value)
    }

    const handleSubmit = x=> {
        x.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random() *1000000),
            content: input
        });        
         setInput('')
    };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
    <input 
    type='text'
    placeholder ='Add here'
    value={input}
    name='text'
    className='todo-input'
    onChange={handleChange}
    />
        <button className='todo-button'>Add</button>
        </form>
  )
}

export default TodoForm

