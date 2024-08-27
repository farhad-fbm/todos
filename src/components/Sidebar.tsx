import React, { useContext } from 'react'
import { Button } from './Button'
import { AddTodoForm } from './AddTodoForm'
import { AuthContext } from './../contexts/AuthContexProvider';


export const Sidebar = () => {
  const { user, handleGoogleAuth, handleLogout } = useContext(AuthContext)
  return (
    <div className=' col-[3_/_3] row-[2_/3_] bg-[#fffcf9] pt-[18px] pb-[28px] flex flex-col justify-between border-l border-l-[rgba(0,0,0,0.08)] '>
      <AddTodoForm />
      <div className="space-y-2">
        {
          user
            ? <Button buttonType='secondary' onClick={handleLogout}>Logout</Button>
            : <>
              <Button buttonType='secondary' onClick={handleGoogleAuth}>Login</Button>
              <Button buttonType='secondary' onClick={handleGoogleAuth}>Register</Button>
            </>
        }
      </div>
    </div>
  )
}
