import { createContext, useState } from 'react'
import { PropTypes } from 'prop-types'

const initialTodos = [
  {
    id: 1,
    content: "Buy Groceries",
    completed: false
  },
  {
    id: 2,
    content: "Reading Book",
    completed: false
  },
  {
    id: 3,
    content: "Go to Tuition",
    completed: false
  }
]

export const TodosContext = createContext();
export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialTodos);
  const progressPercentage = (todos.filter((todo) => todo.completed).length / todos.length)*100;
  return (
    <TodosContext.Provider value={{ todos, setTodos, progressPercentage }}>
      {children}
    </TodosContext.Provider>
  )
}
// _________________________________
TodosContextProvider.propTypes = {
  children: PropTypes.element
}