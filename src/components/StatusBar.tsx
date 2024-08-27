import React, { useContext } from 'react'
import { TodosContext } from '../contexts/TodosContextProvider'

export const StatusBar = () => {
  const { progressPercentage }=useContext(TodosContext);
  return (
    <div
      style={{width: `${progressPercentage}%`}}
      className='h-[10px] bg-[orange] absolute top-0 left-0 '
    />
  )
}
 