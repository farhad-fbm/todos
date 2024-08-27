import { useContext, useState } from 'react'
import { TodosContext } from '../contexts/TodosContextProvider';
import { Button } from './Button';
import { AuthContext } from '../contexts/AuthContexProvider';
import { MAX_FREE_TODOS } from './../lib/constants';

export const AddTodoForm = () => {
  const { todos, setTodos } = useContext(TodosContext)
  const { user } = useContext(AuthContext);

  const [todoContent, setTodoContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todos.length >= MAX_FREE_TODOS && !user) {
      alert("you need to signIn")
      return;
    }
    setTodos((prev) => [...prev, {
      id: prev.length + 1,
      content: todoContent,
      complete: false
    }]);
    setTodoContent("");
  }
  return (
    <form>
      <h2 className='text-[#231d15] text-[16px] font-medium '>Add t todo</h2>
      <input 
      type="text" 
      autoFocus
      className='h-[45px] w-full border-[1px] border-[rgba(0,0,0,0.12)] rounded-5[px] ml-[0] mr-[0] my-[9px] px-[16px] py-[0] text-[14px] '
      value={todoContent}
      onChange={(e)=>setTodoContent(e.target.value)}
      />
      <Button onClick={handleSubmit}>Add to list</Button>
    </form>
  )
}
