import React, { useContext } from 'react'
import { TodosContext } from '../contexts/TodosContextProvider'
import { Button } from './Button';

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const deleteTodo = (id) => {
    const td = todos.filter(todo => todo.id != id)
    setTodos(td);
  }
  const handleAllRead = () => {
    setTodos(
      todos.map(todo => ({ ...todo, completed: true })
      )
    )
  }
  return (
    // <div className='col-[1_/_3] row-[2_/3_] w-1/3'>
    <div>
      {
        todos.length === 0
        && <p className='h-full flex justify-center items-center  font-semibold'>
          start by adding todo</p>
      }
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}
            className='flex justify-between items-center px-8 h-[50px] border-b cursor-pointer border-b-[rgba(0,0,0,0.08)]'
          >
            <span className={`${todo.completed && 'line-through text-[#ccc]'}`}>{todo.content}</span>
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id) }}> X </button>
          </li>)
        )}
      </ul>
      <Button onClick={() => setTodos([])}>Reset Todo</Button>
      <Button onClick={handleAllRead}> Mark all as read</Button>
    </div >
  )
}
