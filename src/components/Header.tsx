import React from 'react'
import { Logo } from './Logo'
import { Counter } from './Counter'

export const Header = () => {
  return (
    <header className='col-span-3 row-[1/2] bg-[#fbf5ed] border-b brder-b-[rgba(0,0,0,0.04)] flex justify-between items-center px-[28px] py-[0] '>
      <Logo />
      <Counter />
    </header>
  )
}
